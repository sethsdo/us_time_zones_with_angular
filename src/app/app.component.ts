import { Component } from '@angular/core';
import { Element } from '@angular/compiler';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  color1;
  color2;
  color3;
  color4;
  test = false
  myBoolean = false
  today: any;

  btnClick(param) {
    if(param === "btn1") {
      this.color1 = "yellow";
      this.color2 = "lightgrey";
      this.color3 = "lightgrey";
      this.color4 = "lightgrey";
      this.myBoolean = true;
      this.today = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
;
      return this
    }
    if (param === "btn2") {
      this.color2 = "yellow";
      this.color1 = "lightgrey";
      this.color3 = "lightgrey";
      this.color4 = "lightgrey";
      this.myBoolean = true;
      this.today = new Date().toLocaleString('en-US', { timeZone: 'America/Denver' });
      return this
    }
    if (param === "btn3") {
      this.color3 = "yellow";
      this.color2 = "lightgrey";
      this.color1 = "lightgrey";
      this.color4 = "lightgrey";
      this.myBoolean = true;
      this.today = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
      return this
    }
    if (param === "btn4") {
      this.color4 = "yellow";
      this.color2 = "lightgrey";
      this.color3 = "lightgrey";
      this.color1 = "lightgrey";
      this.myBoolean = true;
      this.today = new Date().toLocaleString('en-US', { timeZone: 'America/Indianapolis' });
      return this
    }
    if (param === "reset") {
      this.color1 = "lightgrey";
      this.color2 = "lightgrey";
      this.color3 = "lightgrey";
      this.color4 = "lightgrey";
      this.myBoolean = false;
      return this
    }
  }
}
