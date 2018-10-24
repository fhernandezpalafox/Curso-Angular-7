import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Felipe Hernandez';
  edad = 29;
  carreras = ['Preparatoria', 'Licenciatura', 'Posgrado'];
}
