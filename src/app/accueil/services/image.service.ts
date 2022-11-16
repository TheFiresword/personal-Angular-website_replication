import { Injectable } from "@angular/core";
import { ImageDefilante } from "../models/image.model";

@ Injectable(
    {providedIn:'root'}
    )
export class ImageService{


    imageDefilante:ImageDefilante[]=
    [
    new ImageDefilante(
        '/assets/imdef1.jpg',
        'Restitution culturelle',
        'Soirée carte blanche à la maison de la culture de Bourges'
    ),
    new ImageDefilante(
       '/assets/imdef2.jpg',
       'Cordées de la réussite',
       '2 actions menées à Blois et à Bourges' 
    ),
    new ImageDefilante(
        'assets/imdef3.jpg',
        'Action solidaire',
        '6 étudiants musiciens du département MRI en représentation dans un EHPHAD'
    ),
    new ImageDefilante(
        'assets/imdef4.jpg',
        'Partenariat EDF-INSA',
        'Séminaire régional les 28 et 29 Avril à Bourges'
    ),
    new ImageDefilante(
        'assets/imdef5.jpg',
        'Concours d\'entrée à l\Ecole de la Nature et du Paysage',
        'les 26 et 27 Avril sur le campus de Blois'
    )
    ]
    ;
    activated:boolean[]=[false,false,false,false,false,false];

    afficheComplementaire(i:number){
        this.activated[i]=true;
        for (let j = 0; j < this.activated.length; j++) {
            if(j!=i){
                this.activated[j]=false;
            }
            
        }
      }
       supprimeComplementaire(i:number){
        this.activated[i]=false;
      }
    
}