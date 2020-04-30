import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Connection } from 'src/model/connection';
import { ConnectionService } from 'src/service/connection.service';

@Component({
  selector: 'lucid-connection-list',
  templateUrl: './connectionlist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectionListComponent implements OnInit {
  public connections: Connection[];
  constructor(private connectionService: ConnectionService) {}

  ngOnInit(): void {
    this.connectionService
      .getConnections()
      .then((connnections) => (this.connections = connnections));
  }
}
