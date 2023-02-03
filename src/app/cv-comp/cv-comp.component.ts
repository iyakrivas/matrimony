import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-cv-comp',
  templateUrl: './cv-comp.component.html',
  styleUrls: ['./cv-comp.component.scss']
})
export class CvCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    (<any>$('.owl-carousel')).owlCarousel({
      loop: true,
      autoWidth: true,
      dots:true,
      autoplay: true,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
    })

  }


}
