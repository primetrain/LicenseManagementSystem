import { BehaviorSubject } from 'rxjs';

export class  DataExchange<T>{
  
  subject = new BehaviorSubject<T>(null); 

  set publish (data: T) {
    this.subject.next(data);
  }

  get current(){
    return this.subject
  }
}