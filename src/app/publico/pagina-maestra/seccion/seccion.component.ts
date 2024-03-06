import { Component, Input } from '@angular/core';
import { SeccionModel } from '../../../modelos/seccion.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent {
  @Input() contenido?: SeccionModel = new SeccionModel;
}
