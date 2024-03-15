import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isUserNameEmpty(): boolean {
    if (this.userName == '') return true;
    return false;
  }
  title = 'assignment-2-databinding';
  userName = ''
}
