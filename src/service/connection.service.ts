import { Injectable } from '@angular/core';
import { Connection } from 'src/model/connection';
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  constructor() { }

  public getConnections(): Promise<Connection[]>
  {
    return new Promise(resolve => {
      setTimeout(() => { resolve( [ new Connection('Azure','http://foo.bar.com','AR','Foo'),
      new Connection('Azure1','http://foo.foo.com','AR','Foo')
    ] )}, 2000 ); });
  }
}
