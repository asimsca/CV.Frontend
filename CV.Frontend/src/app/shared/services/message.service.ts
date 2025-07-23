import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MessageEnum } from 'src/app/enums/message.enum';
@Injectable({ providedIn: 'root' })

export class MessageService {

  constructor() { }
  private subject = new Subject<Map<string, any>>();
  private allMap: Map<string, any> = new Map<string, any>();

  sendMessage(key: string, message: any) {
    if(key==MessageEnum.dashboardSubHeaderTitle){
      this.allMap.delete(key);
      this.allMap.set(MessageEnum.dashboardShowSubHeader, true)
    }
    this.allMap.set(key, message)
    this.subject.next(this.allMap);
  }

  clearMessage() {
    this.allMap.clear();
    this.subject.next(this.allMap);
  }

  getMessage(): Observable<Map<string, any>> {
    return this.subject.asObservable();
  }
}