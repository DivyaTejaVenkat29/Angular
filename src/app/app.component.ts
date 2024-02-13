import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Title="Counter"
  count:number=0;
  isposDisabled=false;
  isnegDisabled=false;
  evenFlag=true;
  isEven="Even"
  checkEvenOdd()
  {
    if(this.count%2==0){
      this.isEven="Even";this.evenFlag=true
    }
    else{
      this.isEven="Odd",this.evenFlag=false
    }
  }
  incr()
  {
    if(this.count>=20)
    {
      this.isposDisabled=true
    }
    else{
      this.count++;
    }
    this.checkEvenOdd()
  }
  decr(){
    if(this.count<=0){
      this.isnegDisabled=true
    }
    else{
      this.count--;

    }
    
    this.checkEvenOdd();
  }
  reset(){
    this.count=0;
    this.isnegDisabled=false;
    this.isposDisabled=false;
  }
  showMainCode = false;

  toggleMainCode() {
    this.showMainCode = !this.showMainCode;
  }

}
