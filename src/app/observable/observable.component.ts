import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {


  orderStatus:any = '';

  data:Observable<any>;

  constructor() { }

  ngOnInit() {

    new Observable(observer => {

      setTimeout(() => {
        observer.next('in progress');
      }, 2000);

      setTimeout(() => {
        observer.next('processing');
      }, 5000);

      setTimeout(() => {
        observer.next('completed');
      }, 8000);
    }).subscribe(val =>{
      this.orderStatus = val;
    });
  }

}
