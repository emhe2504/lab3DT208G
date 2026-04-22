import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})

export class Calculator {
  //Properties

  input: number = 0;
  milResult: number = 0;
  gramResult: number = 0;
  hecResult: number = 0;
  kilResult: number = 0;

  //Methods

  milligram(): void {

    this.milResult = this.input;
    this.gramResult = this.input / 1000;
    this.hecResult = this.input / 100000;
    this.kilResult = this.input / 1000000;

  }

  gram(): void {
    this.milResult = this.input * 1000;
    this.gramResult = this.input;
    this.hecResult = this.input / 100;
    this.kilResult = this.input / 1000;
  }

  hectogram(): void {
    this.milResult = this.input * 100000; 
    this.gramResult = this.input * 100; 
    this.hecResult = this.input;
    this.kilResult = this.input / 10;
  }

  kilogram(): void { 
    this.milResult = this.input * 1000000; 
    this.gramResult = this.input * 1000; 
    this.hecResult = this.input * 10;
    this.kilResult = this.input;
  }


}
