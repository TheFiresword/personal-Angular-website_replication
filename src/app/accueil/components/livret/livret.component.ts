import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Livret } from '../../models/image.model';
import { LivretService } from '../../services/livret.service';

@Component({
  selector: 'app-livret',
  templateUrl: './livret.component.html',
  styleUrls: ['./livret.component.scss']
})
export class LivretComponent implements OnInit {
  @Input() livret!:Livret;
  public numero!:number;
  constructor(public livretService:LivretService) { }

  ngOnInit(): void {
    this.numero=this.livretService.myLivret.indexOf(this.livret);
  }
  
  

}
