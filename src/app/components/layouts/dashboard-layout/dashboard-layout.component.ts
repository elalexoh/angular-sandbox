import { toggleLoading } from './../../../store/actions/items.actions';
import { selectLoading } from './../../../store/selectors/items.selectors';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  loading$: Observable<boolean> = new Observable()

  constructor(private store: Store<any>) {

  }


  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)

    // this.store.dispatch(toggleLoading)
  }

}
