import { Component } from '@angular/core';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];

  onAddServerFromApp(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddBluePrintFromApp(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onDelete(index: number) {
    this.serverElements.splice(index, 1);
  }
}
