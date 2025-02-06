import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-num-pad-comp',
  standalone: true,
  imports: [],
  templateUrl: './num-pad-comp.component.html',
  styleUrl: './num-pad-comp.component.css'
})
export class NumPadCompComponent {

  @Input() operation!: string;

  @Output() sendOperation = new EventEmitter<string>();

  @Output() solveOperation = new EventEmitter<void>();

  @Output() resetOperation = new EventEmitter<void>();

  public appendValue(value : string){

    this.sendOperation.emit(value);
    
  }

  public solve(){

    this.solveOperation.emit();


  }

  public reset(){

    this.resetOperation.emit();

  }

}
