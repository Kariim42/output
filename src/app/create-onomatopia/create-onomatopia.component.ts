import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {

  newOnomatopia :string | undefined

@Output()
sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

createOnomatopia(){
  this.sendOnomatopiaToParent.emit(this.newOnomatopia);
}

  ngOnInit(): void {
  }

}
