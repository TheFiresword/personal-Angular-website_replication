import { Component, OnInit } from '@angular/core';
import { LivretService } from '../../services/livret.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  
  constructor(public livretService:LivretService) { }

  ngOnInit(): void {
  }

}
