import { Routes } from '@angular/router';
import { GestionPersonas } from './services/gestion-personas';
import { ListaPersonas } from './pages/lista-personas/lista-personas';
import { Inicio } from './pages/inicio/inicio';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'lista-personas', component: ListaPersonas },
    {path: 'inicio', component: Inicio},
    {path: '**', redirectTo: 'inicio' }
];
