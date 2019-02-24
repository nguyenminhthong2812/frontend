import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  public status:boolean = false;
  @Input() ghe;
  @Output() emitStatus = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  ChonGhe(){
    if(this.status)
      this.status = false;
    else
      this.status = true;
    this.emitStatus.emit(this.status);
  }
}
