import { Component, OnInit } from '@angular/core';
import '@vime/core/themes/default.css';

import { ApiService } from '../service/api.service';
import { Video } from '../video/video';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss']
})
export class ViewVideoComponent implements OnInit {

  videoDetail: any;

  hlsConfig = {
    crossOrigin: ""
  }

  constructor(private apiService: ApiService) { 
  }

  ngOnInit(): void {
    let response = this.apiService.getVideoDetails('138623c8-de19-4c68-b230-a9b8a0e8c616');
    response.subscribe(data => {
      this.videoDetail = data[0];
      console.log(this.videoDetail);
    });
  }
}
