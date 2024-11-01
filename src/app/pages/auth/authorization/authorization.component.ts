import { UserService } from './../../../services/user/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import IUser from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit, OnDestroy {
  loginNameLable: string = 'Логин';
  passwordLable: string = 'Пароль';
  login: string = '';
  password: string = '';
  selectedValue: boolean = false;
  cardNumber: string;
  authTextButton: string;

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authTextButton = 'Авторизоваться';
  }

  ngOnDestroy(): void {
    console.log('AuthorizationComponent is destroyed');
  }

  vipStatusSelected(): void {}

  onAuth(e: Event): void {
    const user: IUser = {
      login: this.login,
      password: this.password,
    };

    if (this.authService.checkUser(user)) {
      this.userService.setUser(user);
      this.router.navigate(['tickets/tickets-list']);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Ошибка авторизации',
        detail:
          'Пользователь с такими данными не существует или введен неверный пароль',
      });
    }
  }
}
