import { HostListener, Injectable,OnInit } from "@angular/core";

@Injectable(
    {providedIn:'root'}
)
export class ResizeScreen
{
     widthChanged!:boolean;
     
     ngOnInit(){     
        if(window.innerWidth > 835)
        this.widthChanged=false;
        else
        this.widthChanged=true;
        
     }
        
}