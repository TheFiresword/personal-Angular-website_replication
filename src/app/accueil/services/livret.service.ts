import { Injectable } from "@angular/core";
import { Livret } from "../models/image.model";

@Injectable(
    {providedIn:'root'}
)


export class LivretService{

    myLivret: Livret[]=[
        new Livret('/assets/livret1.jpg',
        'ETUDIANT LYCEEN',
        'REJOIGNEZ L\'INSA CENTRE VAL DE LOIRE!',
        'Le cursus d\'ingénieur d\'une durée de 5 ans post-bac est accessible à tous les niveaux '),

        new Livret(
            '/assets/livret2.jpg',
            'ENSEIGNANT CHERCHEUR',
            'PARTICIPEZ AUX AVANCEES DE DEMAIN',
            'Découvrez l\'INSA et les opportunités professionnelles qui s\'offrent à vous'),

        new Livret(
            '/assets/livret3.jpg',
            'PROFESSIONNEL',
            'DEVENEZ PARTENAIRE',
            'Le Réseau des Partenaires de l\'INSA est le cadre privilégié du renforcement des compétences professionnelles'
        ),
        new Livret(
            '/assets/livret4.jpg',
            'ANCIEN ELEVE',
            'RETOUR AUX SOURCES',
            'Vos expériences professionnelles nous intéressent: elles nous permettend de mieux informer les élèves ou futurs élèves'
        ),
        new Livret(
            '/assets/livret5.jpg',
            'MEDIA / PRESSE',
            'EN DIRECT!',
            'Toutes les actualités, communiqués, publications, dossier de presse de l\'école'
        )

    ]
}