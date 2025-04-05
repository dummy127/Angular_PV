import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,CurrencyPipe,DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  name:string = "aradhyaambole"
  amount:number = 8778
  curdate:Date = new Date()
  upper:string = "THIS IS UPPERCASE SENTENCE"
  sen:string = "this is titlecase sentence created using titlecase pipe"
}
