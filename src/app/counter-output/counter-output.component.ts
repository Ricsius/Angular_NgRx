import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectCount, selectCountDouble } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  count$: Observable<number>;
  double$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    this.count$ = store.select(selectCount);
    this.double$ = store.select(selectCountDouble);
  }
}
