import { Component, OnInit } from '@angular/core';
import { LivretService } from '../../services/livret.service';

@Component({
  selector: 'app-liste-livrets',
  templateUrl: './liste-livrets.component.html',
  styleUrls: ['./liste-livrets.component.scss']
})
export class ListeLivretsComponent implements OnInit {

  constructor(public livretService:LivretService) { }

  ngOnInit(): void {
  }

}
