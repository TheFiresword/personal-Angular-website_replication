import { Component, Input, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { ImageDefilante } from '../../models/image.model';
import { ResizeScreen } from '../../services/ecran.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-une-image-defilante',
  templateUrl: './une-image-defilante.component.html',
  styleUrls: ['./une-image-defilante.component.scss']
})
export class UneImageDefilanteComponent implements OnInit {

   myImage!: ImageDefilante;
   
  constructor(public imageService: ImageService, public myScreen: ResizeScreen) { }

  ngOnInit(): void {
    
    this.myImage=this.imageService.imageDefilante[0];
 
    this.automatic();
    
    }
  

    
  
  changeImageRight():ImageDefilante {
    
    let i=this.imageService.imageDefilante.indexOf(this.myImage);
    if(i==4){
      i=-1;
    }
    this.myImage=this.imageService.imageDefilante[i+1]; 
   
    return this.myImage;
  }

  automatic():void{
    setInterval(this.changeImageRight.bind(this),5000);
  }
 
  
  changeImageLeft():ImageDefilante {
    
    let i=this.imageService.imageDefilante.indexOf(this.myImage);
    if(i==0){
      i=4;
    }
    this.myImage=this.imageService.imageDefilante[i-1]; 
    return this.myImage;
  }



}
