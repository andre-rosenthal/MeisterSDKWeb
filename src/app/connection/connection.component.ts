import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Connection } from 'src/model/connection';
@Component({
  selector: 'lucid-connection',
  templateUrl: './connection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectionComponent implements OnInit {
  @Input() connection: Connection;
  constructor() {}

  ngOnInit(): void {}
  TestConnection() {
    this.connection.ConnectionTest();
  }
}
