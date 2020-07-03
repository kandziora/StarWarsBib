import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIdService {

  constructor() { }

  getId(url:string) {
    return url.split("/").slice(-2)[0];
  } 

}
