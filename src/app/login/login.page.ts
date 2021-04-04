import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RemoteServicesService } from '../provider/remote-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Loginform: FormGroup
  validation_messages = {
    'username': [
      { type: 'required', message: 'El correo electrónico es requerido.' },
      { type: 'username', message: 'Por favor, ingrese un correo electrónico válido.' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es requerida.' },
    ]
  }
  hide: boolean = true;
  formEmpy: boolean = false;

  constructor(
    private formBuilder: FormBuilder, private services: RemoteServicesService
  ) { }

  ngOnInit() {
    this.Loginform = this.Myform();
  } 
  //Datos para el login
  sendData(data) {
    if(this.Loginform.valid){
      this.services.login(data).then(value =>{
        console.log(value)
      });
    }else{
      this.formEmpy = true;
    }
  }
  //Evalua el uso del botton enter para hacer el submit
  eventHandler(keyCode){
    if(keyCode == 13){
      if(this.Loginform.valid){
        document.getElementById("bttSubmit").click();
      }

    }
  }
  private Myform() {
    return this.formBuilder.group({
      username: ['info@contanimacion.com', [Validators.required, Validators.email]],
      password: ['jorge', [Validators.required]]
    })
  }


}
