import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  carsArr = new FormArray([]);

  ngOnInit(): void {
    this.addCar();
  }
  
  // create the form, 
  public myForm = new FormGroup({
    name: new FormControl(''),
    cars: this.carsArr
  });

  public addCar(): void {
    const group = new FormGroup({
      make: new FormControl(''),
      colour: new FormControl('')
    });

    this.carsArr.push(group);
  }

  public deleteCar(index: number): void {
    this.carsArr.removeAt(index);
  }

  public saveForm(): void {
    console.log(this.myForm.value);
    
  }
}
