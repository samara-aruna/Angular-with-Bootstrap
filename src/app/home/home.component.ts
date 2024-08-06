import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{
  public weight! : number;
  public height!:number;
  public bmi!:number;

  calculate()
  {
    this.bmi = this.weight/(Math.sqrt(this.height/100));

    if(this.bmi < 18.5)
    {
      alert("You are in UnderWeight range");
    }
    else if(this.bmi >= 18.5 && this.bmi<=24.9)
    {
      alert("You are in Healthy Weight Range");
    }
    else if(this.bmi >= 25 && this.bmi<=29.9)
    {
      alert("You are in OverWeight range");
    }
    else
    {
      alert("You are in Obesity Weight Range");
    }
  }

}
