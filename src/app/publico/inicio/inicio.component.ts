import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeccionComponent } from '../pagina-maestra/seccion/seccion.component';
import { SeccionModel } from '../../modelos/seccion.model';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  imports: [RouterModule, SeccionComponent]
})
export class InicioComponent {

  nosotros: SeccionModel = {
    titulo: 'SOBRE NOSOTROS',
    imagen: '../../../assets/team2.jpeg',
    contenido: "Somos Pelicanos Voley Club, un Club de voleibol, ubicado en el Bosque popular el Prado de Manizales; pionero en el voley playa ¨beach volleyball¨, un deporte de precisión, explosividad,técnica, fuerza y velocidad, es todo un espectáculo en la arena. Somos profesionales en eventos, torneos, la enseñanza, formación y metodología del voleibol de playa, con más de 7 años de experiencia, pioneros en la región cafetera desde 2016. Una ventaja del entrenamiento descalzo en la arena, es que se requiere de más esfuerzo, que en una superficie plana, mejorando la condición física y mental, así generando progresos en menor tiempo. Juega voley playa, Anímate! aprende con Pelicanos Voley Club.",
    textoBoton: 'Pide tu primer clase ¡Gratis!'
  }

}
