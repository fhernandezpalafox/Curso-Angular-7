import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Objeto
  alumno = {
    Matricula: null,
    Nombre: null,
    Edad: null,
    Carrera: null
  };

  listaAlumnos = [{Matricula: 10992, Nombre: 'Felipe Hernandez', Edad: 29, Carrera: 'Sistemas'},
               {Matricula: 227262, Nombre: 'Oscar Huerta', Edad: 29, Carrera: 'Sistemas'},
               {Matricula: 32272, Nombre: 'Juan Castillo', Edad: 30, Carrera: 'DBA'},
               {Matricula: 42092, Nombre: 'Juan Perez', Edad: 24, Carrera: 'Sistemas'},
               {Matricula: 58272, Nombre: 'Pablo Ruiz', Edad: 35, Carrera: 'Sistemas'},
              ];

  hayRegistros() {
    return this.listaAlumnos.length > 0;
  }

  borrar(elemento) {
    for (let x = 0; x < this.listaAlumnos.length; x++) {
      if (this.listaAlumnos[x].Matricula === elemento.Matricula) {
        this.listaAlumnos.splice(x, 1);
        return;
      }
    }
  }

  agregar() {
    for (let x = 0; x < this.listaAlumnos.length; x++) {
      if (this.listaAlumnos[x].Matricula === this.alumno.Matricula) {
        alert('ya existe un alumno con dicha matricula');
        return;
      }
    }
    this.listaAlumnos.push({Matricula: this.alumno.Matricula,
                            Nombre: this.alumno.Nombre,
                            Edad: this.alumno.Edad,
                            Carrera: this.alumno.Carrera });

    this.alumno.Matricula = null;
    this.alumno.Nombre = null;
    this.alumno.Edad = null;
    this.alumno.Carrera = null;
  }

  seleccionar(elemento) {
    this.alumno.Matricula = elemento.Matricula;
    this.alumno.Nombre = elemento.Nombre;
    this.alumno.Edad = elemento.Edad;
    this.alumno.Carrera = elemento.Carrera;
  }

  modificar() {
    for (let x = 0; x < this.listaAlumnos.length; x++) {
      if (this.listaAlumnos[x].Matricula === this.alumno.Matricula) {
        this.listaAlumnos[x].Matricula = this.alumno.Matricula;
        this.listaAlumnos[x].Nombre = this.alumno.Nombre;
        this.listaAlumnos[x].Edad = this.alumno.Edad;
        this.listaAlumnos[x].Carrera = this.alumno.Carrera;
        return;
      }
    }
    alert('No existe la matricula del alumno ingresado');
  }

}


// GUIA
// http://www.talkingdotnet.com/add-bootstrap-4-to-angular-6-application/
