import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lichchieu',
  templateUrl: './lichchieu.component.html',
  styleUrls: ['./lichchieu.component.css']
})
export class LichchieuComponent implements OnInit {
  @Input() lichchieu;
  @Output() emitStatus = new EventEmitter();
  constructor() { }

  ngOnInit() {
    //console.log(this.lichchieu);
  }
  DatVe(){
    this.emitStatus.emit(true);
  }
}
