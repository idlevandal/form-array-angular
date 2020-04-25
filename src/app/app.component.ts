import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // 1. create a class member & set it equal to new FormArray([]);
  // 2. create a formGroup and set the class variable as 1 of the formGroups Controls
  // 3. create a method to add control/controls to the FormArray class member
  // 4. create a delete method using the .removeAt(index) function.
  // 5. Optionally add an initial value to the FormArray in OnInit by calling step 3 add method

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
