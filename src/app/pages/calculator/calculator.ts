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


  //Weight
  weightInput: number = 0;
  milResult: number = 0;
  gramResult: number = 0;
  hecResult: number = 0;
  kilResult: number = 0;

  //Length
  lengthInput: number = 0;
  mmResult: number = 0;
  cmResult: number = 0;
  dmResult: number = 0;
  mResult: number = 0;
  footResult: number = 0;




  //Methods

  //Weight

  milligram(): void {

    this.milResult = this.weightInput;
    this.gramResult = this.weightInput / 1000;
    this.hecResult = this.weightInput / 100000;
    this.kilResult = this.weightInput / 1000000;

  }

  gram(): void {
    this.milResult = this.weightInput * 1000;
    this.gramResult = this.weightInput;
    this.hecResult = this.weightInput / 100;
    this.kilResult = this.weightInput / 1000;
  }

  hectogram(): void {
    this.milResult = this.weightInput * 100000; 
    this.gramResult = this.weightInput * 100; 
    this.hecResult = this.weightInput;
    this.kilResult = this.weightInput / 10;
  }

  kilogram(): void { 
    this.milResult = this.weightInput * 1000000; 
    this.gramResult = this.weightInput * 1000; 
    this.hecResult = this.weightInput * 10;
    this.kilResult = this.weightInput;
  }


  //Length

  millimeter(): void {
    this.mmResult = this.lengthInput;
    this.cmResult = this.lengthInput / 10;
    this.dmResult = this.lengthInput / 100;
    this.mResult = this.lengthInput / 1000;
    this.footResult = this.lengthInput / 304.8;
  }

   centimeter(): void {
    this.mmResult = this.lengthInput * 10;
    this.cmResult = this.lengthInput;
    this.dmResult = this.lengthInput / 10;
    this.mResult = this.lengthInput / 100;
    this.footResult = this.lengthInput / 30.48;
  }

   decimeter(): void {
    this.mmResult = this.lengthInput  * 100;
    this.cmResult = this.lengthInput * 10;
    this.dmResult = this.lengthInput;
    this.mResult = this.lengthInput / 10;
    this.footResult = this.lengthInput * 0.328084;
  }

   meter(): void {
    this.mmResult = this.lengthInput * 1000;
    this.cmResult = this.lengthInput * 100;
    this.dmResult = this.lengthInput * 10;
    this.mResult = this.lengthInput;
    this.footResult = this.lengthInput * 3.28084;
  }

   foot(): void {
    this.mmResult = this.lengthInput * 304.8;
    this.cmResult = this.lengthInput * 30.48;
    this.dmResult = this.lengthInput * 3.048;
    this.mResult = this.lengthInput * 0.3048;
    this.footResult = this.lengthInput;
  }
}
