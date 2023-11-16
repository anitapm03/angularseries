import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { ServiceSeries } from 'src/app/services/service.series';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public series!: Array<Serie>;

  constructor(private _serviceSeries: ServiceSeries){}

  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe(response => {
      this.series = response;
      console.log(this.series);
    })
  }

}
