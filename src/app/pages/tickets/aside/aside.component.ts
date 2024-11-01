import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMenuType } from 'src/app/models/IMenuType';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})


export class AsideComponent implements OnInit {
  menuTypes: IMenuType[];
  selectedMenuType: IMenuType;
  @Output() updateMenuType: EventEmitter<IMenuType> = new EventEmitter()


  constructor() {}

  ngOnInit(): void {
    this.menuTypes = [
      { type: 'custom', label: 'Обычное' },
      { type: 'extended', label: 'Расширенное' },
    ];
  }

  changeType(e: {e: Event, value: IMenuType}): void {
    console.log('ev', e)
    this.updateMenuType.emit(e.value);
  }
}
