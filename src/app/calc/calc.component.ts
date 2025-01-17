import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {



  public operation = '';

  appendValue(arg0: string) {

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
