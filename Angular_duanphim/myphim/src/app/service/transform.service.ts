import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransformService {
  private data = new BehaviorSubject(null);
  public asData = this.data.asObservable();
  constructor() { }
  public transformData(thamso){
    this.data.next(thamso);
  }
}
