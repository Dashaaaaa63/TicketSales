import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import IUser from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  login: string;
  password: string;
  passwordRepeat: string;
  email: string;
  cardNumber: string;
  isUseLocalStorage: boolean;

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  registration(e: Event): void | boolean {
    if (this.password !== this.passwordRepeat) {
      this.messageService.add({
        severity: 'error',
        summary: 'Пароли не совпадают',
      });
      return false;
    }

    const user: IUser = {
      password: this.password,
      cardNumber: this.cardNumber,
      login: this.login,
      email: this.email,
    };

    if (!this.authService.isUserExists(user)) {
      const registrResult = this.authService.setUser(user, this.isUseLocalStorage);

      if(registrResult && this.isUseLocalStorage) {
        this.messageService.add({
          severity: 'success',
          summary: 'Вы зарегистрированы',
          detail: 'Пользователь успешно добавлен в локальное хранилище браузера'
        });
      } else if (registrResult && !this.isUseLocalStorage) {
        this.messageService.add({
          severity: 'success',
          summary: 'Вы зарегистрированы',
          detail: 'Пользователь успешно добавлен в хранилище пользователей'
        });
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Пользователь уже существует',
        detail: 'Пользователь с таким логином уже зарегистрирован',
      });
    }
  }
}
