import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-consume',
  templateUrl: './consume.component.html',
  styleUrls: ['./consume.component.css']
})
export class ConsumeComponent implements OnInit {

  constructor(private restService:RestService) { }

  albumsList:any;

  ngOnInit() {
    this.restService.getDetails().subscribe(data => { this.albumsList = data; });
  }

}
