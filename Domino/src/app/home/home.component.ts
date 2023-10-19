import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public name = 'Kuzinkiller';
  public nameOrigin = '';
  public age = 25;
  public traiCay = ['Táo', 'Dâu', 'Xoài'];
  public traiCay2 = [
    { name: 'Apple', price: 1232, sale: true },
    { name: 'Orange', price: 30, sale: false },
    { name: 'Grape', price: 123, sale: true },
    { name: 'Watermelon', price: 432, sale: false },
  ];

  constructor() {
    console.log('constructor');
    this.nameOrigin = this.name;
    console.log(this.nameOrigin);
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  public resetName(): void {
    console.log('Resetname');
    this.name = this.nameOrigin;
  }
}
