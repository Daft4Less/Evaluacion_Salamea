import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GestionPersonas } from '../../services/gestion-personas';
import { error } from 'console';


@Component({
  selector: 'app-lista-personas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-personas.html',
  styleUrl: './lista-personas.scss',
})
export class ListaPersonas implements OnInit {

   personas: any[] = [];
  gs: any;

   constructor(private gp: GestionPersonas) {}

   ngOnInit():void {
    this.gs.getPersonas().subcribe({
      next: (resp: any) => {
        console.log('Datos recibidos: ', resp);
        this.personas = resp.results;
        console.log('Personas: ', this.personas);
      },
      error: (err: any) => {
        console.error('Error al obtener las personas: ', err);
      },
      complete: () => {
        console.log('Solicitud completada');
      }
    });
  }

}
