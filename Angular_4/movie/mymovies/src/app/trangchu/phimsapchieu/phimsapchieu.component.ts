import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-phimsapchieu',
  templateUrl: './phimsapchieu.component.html',
  styleUrls: ['./phimsapchieu.component.css']
})
export class PhimsapchieuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })


  }

}
