import { Component, HostListener, OnInit } from '@angular/core';
import { ResizeScreen } from './accueil/services/ecran.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'siteInsa';
 

 ngOnInit():void{
  
 }
  constructor(public myScreen:ResizeScreen){
  
  }

  @HostListener ('window:resize')
    responsive(){
        if(window.innerWidth > 835)
        this.myScreen.widthChanged=false;
        else
        this.myScreen.widthChanged=true;
    }
 }
