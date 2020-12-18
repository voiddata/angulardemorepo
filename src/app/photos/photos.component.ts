import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private restService:RestService) { }

  photosList:any;

  ngOnInit() {
    this.restService.getDetails().subscribe(data => { this.photosList = data; });
  }
}
