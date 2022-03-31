import { Component, OnInit } from '@angular/core';
import '@vime/core/themes/default.css';

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss']
})
export class ViewVideoComponent implements OnInit {

  constructor(private apiService: ApiService) { 
  }

  ngOnInit(): void {
    console.log(this.apiService.getGreeting());
  }

  tempVideoDetails = {
    id: 1,
    title: "Test Video Title"
  }
}
