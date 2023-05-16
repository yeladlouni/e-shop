import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.scss']
})
export class KeyLoggerComponent implements OnInit {
  keys: string[] = [];
  @ViewChild('keyContainer', {static: true}) input: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup');
    /*logger$.subscribe(event => {
      console.log(event.key.charCodeAt(0));
      if (event.key.charCodeAt(0) >= 66 && event.key.charCodeAt(0) <= 122) {
        this.keys.push(event.key);

      }


    });
    logger$.pipe(
      map(evt => event.key.charCodeAt(0)),
      filter(code => code > 31 && (code < 48 || code > 57) === false)),
      tap(event => this.keys += event.key)
    ).subscribe();
  }*/
}
}
