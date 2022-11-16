import { Component, OnInit } from '@angular/core';
import { ResizeScreen } from '../../../accueil/services/ecran.service';
import { ImageService } from '../../../accueil/services/image.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  widthChanged!:boolean;
  constructor(public imageService:ImageService, public myScreen: ResizeScreen) { }

  ngOnInit(): void {
    this.widthChanged=this.myScreen.widthChanged;
  }
   
}
