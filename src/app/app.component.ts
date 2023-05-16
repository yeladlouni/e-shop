import { Component, OnInit } from '@angular/core';
import { Observable, timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'e-Shop';

  private setTitle = () => {
    //this.title = 'e-Shop-' + Math.round(Math.random());
    this.title = 'e-Shop-' + crypto.randomUUID();
  }

  constructor() {
    // Using a callback
    // this.changeTitle(setTitle);
    // Using a promise
    //this.onComplete().then(this.setTitle);
    this.title$.subscribe(this.setTitle);
  }

  /* Using a callback
  private changeTitle(callback: Function) {
    setInterval(() => {
      callback();
    }, 2000);
  }
  */

  /* Using promises */
  private onComplete() {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000)
    })
  }

  /* Using obervables */
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000)
  });





}
