import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-itemphim',
  templateUrl: './itemphim.component.html',
  styleUrls: ['./itemphim.component.css']
})
export class ItemphimComponent implements OnInit {
  @Input() phim;
  @Output() emitTrailer = new EventEmitter;  
  public trailer:string = '';
  constructor() { }

  ngOnInit() {
    console.log(this.phim);
  }
  LayTrailer(val:string){
    this.trailer = val.replace('watch?v=','embed/');
    this.emitTrailer.emit(this.trailer);
  }
}
