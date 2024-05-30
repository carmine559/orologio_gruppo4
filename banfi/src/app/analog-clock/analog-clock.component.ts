import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css'],
})
export class AnalogClockComponent implements OnChanges {
  @Input() time: string | undefined;
  hourHand: number | undefined;
  minuteHand: number | undefined;
  secondHand: number | undefined;

  ngOnChanges(): void {
    if (this.time) {
      console.log('Input time:', this.time); // Log per verificare l'input

      const timeParts = this.time.split(/[: ]/);
      let hours = +timeParts[0];
      const minutes = +timeParts[1];
      const seconds = +timeParts[2];
      const period = timeParts[3];

      if (period === 'PM' && hours < 12) {
        hours += 12;
      } else if (period === 'AM' && hours === 12) {
        hours = 0;
      }

      this.hourHand = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 = 30
      this.minuteHand = minutes * 6; // 360 / 60 = 6
      this.secondHand = seconds * 6; // 360 / 60 = 6

      console.log('Hours:', hours, 'Minutes:', minutes, 'Seconds:', seconds);
      console.log(
        'Hour hand angle:',
        this.hourHand,
        'Minute hand angle:',
        this.minuteHand,
        'Second hand angle:',
        this.secondHand
      );
    }
  }
}
