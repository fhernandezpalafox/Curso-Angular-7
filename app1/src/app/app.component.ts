import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Felipe Hernandez';
  edad = 29;
  correo = 'felipe.sistemas.fhp@gmail.com';
  esProgramador = true;

  verificarProgramador(): String {
    if (this.esProgramador) {
       return 'Programador es Activo';
    } else {
       return 'Programador esta Inactivo';
    }
  }

  anioNacimiento(): number {
    return 2018 - this.edad;
  }


}
