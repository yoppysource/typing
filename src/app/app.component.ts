import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enteredText ='';
  randomText = lorem.sentence();

  constructor() { }

  ngOnInit(): void {
  }

  onInput(input:string) {
    this.enteredText = input;
    console.log(input);
  }

  compare(letter: string, input: string) {
    if(!input){
      return 'pending';
    }
    return letter === input ? 'correct' : 'incorrect';
  }
}
