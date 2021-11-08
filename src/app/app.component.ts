import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output';

onomatopoeias: string[] = []


onReceiveNewOnomatopia($event: string){
  this.onomatopoeias?.push($event)
}



}
