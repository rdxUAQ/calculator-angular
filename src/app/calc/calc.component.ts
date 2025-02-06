import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumPadCompComponent } from "./num-pad-comp/num-pad-comp.component";

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [FormsModule, NumPadCompComponent],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  
  public operation = '';

  appendValueFromSon(arg0 : string) {

    this.operation+=arg0;
  }

  solve() {


    try{

      this.operation = eval(this.operation);

    }catch(e){

      this.operation = 'Syntax Error!';

    }
    
  }

  reset(){
    this.operation = '';
  }

}
