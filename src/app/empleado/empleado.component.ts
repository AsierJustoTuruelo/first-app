import { Component} from '@angular/core';

/* APUNTES

Para crear property binding se usa [] --> [checked]="registrado"
Para crear event binding se usa () --> (click)="setUsuarioRegistrado($event)
Para crear binding bidireccional se usa [()] -->

*/

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  nombre = "Juan";
  apellido = "Justo";
  //edad = 20;
  empresa="Google";
  
  registrado = false;

  textoRegistro ="No esta registrado, por favor registrese pulsando abajo.";

  getRegistroUsuario(){
    this.registrado=false;
  }

  setUsuarioRegistrado(evento:Event){
    //this.textoRegistro = "Acaba de registrase, bienvenido a MOVISTAR.";
    //alert ("El usuario se ha registrado");

    if ((<HTMLInputElement>evento.target).value == "Si"){
      this.textoRegistro = "Acaba de registrase, bienvenido a Empresa.";

    } else{
      this.textoRegistro = "No esta registrado, por favor registrese pulsando abajo.";

    }
  }

  
  

  
  
  
  
  
  
  comprobarEdad(edad: number){
    if (edad < 18 && edad > 0) {
      return "Es menor de edad";
    } else if (edad >= 18) {
      return "Es mayor de edad";
    } else {
      return "No se puede determinar su edad";
    }
  }

  ngOnInit() {
    // Código a ejecutar cuando se inicializa el componente
  }
  


  
}
