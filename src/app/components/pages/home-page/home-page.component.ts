import { toggleLoading } from './../../../store/actions/items.actions';
import { selectLoading } from './../../../store/selectors/items.selectors';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  loading$: Observable<any> = new Observable

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)


  }
  handleToggleLoading() {
    this.store.dispatch(toggleLoading())
  }

}
