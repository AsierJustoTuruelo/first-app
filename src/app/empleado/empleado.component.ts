import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  nombre = "Juan";
  apellido = "Justo";
  //edad = 20;
  //empresa="Telefonica";
  
  comprobarEdad(edad: number): "Es menor de edad" | "Es mayor de edad" | "No se puede determinar su edad" {
    if (edad < 18 && edad > 0) {
      return "Es menor de edad";
    } else if (edad >= 18) {
      return "Es mayor de edad";
    } else {
      return "No se puede determinar su edad";
    }
  }
  


  
}
