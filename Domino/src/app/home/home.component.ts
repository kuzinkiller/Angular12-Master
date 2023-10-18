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
