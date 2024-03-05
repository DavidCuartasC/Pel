import { Routes } from '@angular/router';
import { InicioComponent } from './publico/inicio/inicio.component';
import { CircuitosComponent } from './publico/contenido/circuitos/circuitos.component';

export const routes: Routes = [
    {
        path: "inicio",
        component: InicioComponent
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/inicio"
    },
    {
        path: "circuitos",
        component: CircuitosComponent
    }
];
