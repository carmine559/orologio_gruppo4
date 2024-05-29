import { Component, OnInit } from '@angular/core';
import { OrologioService } from '../orologio.service';


@Component({
  selector: 'app-orologio',
  templateUrl: './orologio.component.html',
  styleUrls: ['./orologio.component.css']
})
export class  OrologioComponent implements OnInit {

  constructor(private orologioService: OrologioService) { }

  ngOnInit(): void {
    setInterval(() => {
      const d = this.orologioService.getCurrentTime();
      const hr = d.getHours();
      const min = d.getMinutes();
      const sec = d.getSeconds();
      const hr_rotation = 30 * hr + min / 2;
      const min_rotation = 6 * min;
      const sec_rotation = 6 * sec;

      const hour = document.getElementById('hour');
      const minute = document.getElementById('minute');
      const second = document.getElementById('second');

      if (hour && minute && second) {
        hour.style.transform = `rotate(${hr_rotation}deg)`;
        minute.style.transform = `rotate(${min_rotation}deg)`;
        second.style.transform = `rotate(${sec_rotation}deg)`;
      }
    }, 1000);
  }
}