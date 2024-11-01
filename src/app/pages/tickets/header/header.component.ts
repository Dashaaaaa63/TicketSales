import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IMenuType } from 'src/app/models/IMenuType';
import IUser from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
  items: MenuItem[];
  time: Date;
  user: IUser;
  @Input() menuType: IMenuType;

  private settingsActive = false;

  private timerInterval: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.timerInterval = window.setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.user = this.userService.getUser();
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      window.clearInterval(this.timerInterval);
    }
  }

  ngOnChanges(): void {
    this.settingsActive = this.menuType?.type === "extended";
    this.items = this.initMenuItems();
  }

  initMenuItems(): MenuItem[] {
    return [
      {
        label: 'Билеты',
        icon: 'pi pi-ticket',
        routerLink: ['tickets-list'],
      },
      {
        label: 'Настройки',
        icon: 'pi pi-cog',
        routerLink: ['/settings'],
        visible: this.settingsActive
      },
      {
        label: 'Выйти',
        icon: 'pi pi-sign-out',
        routerLink: ['/auth'],
      },
    ]
  }
}
