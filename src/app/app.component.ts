import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  // standalone signifie que le module est conçu pour être utilisé de manière indépendante
  // sans avoir besoin d'un module spécifique pour fonctionner correctement

  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Angular 18 new features"

}
