import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CentrosService } from '../services/centros.service';
import { CursosService } from '../services/cursos.service';
import { HealthsService } from '../services/healths.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { Cursos } from '../Models/Cursos';
import { ObjectSenderService } from '../service/object-sender.service';

import { Storage } from '@ionic/storage';
import { Centro } from '../Models/Centro';
import { Healths } from '../Models/Healths';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-form-health',
  templateUrl: './form-health.page.html',
  styleUrls: ['./form-health.page.scss'],
})
export class FormHealthPage implements OnInit {
  cursos: Cursos[];
  cursoId: number;
  centroId: number;
  centro: Centro;
  curso: Cursos;
  isSubmitted = false;
  health:Healths;
  constructor(private router: Router,private menuCtrl: MenuController,private alertController:AlertController, private auth: AuthService, private healthService: HealthsService, private centroService: CentrosService, private storage: Storage, public formBuilder: FormBuilder) { }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  ngOnInit() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl("/login");

    }
    this.saveParams();

  }
  ionicForm = this.formBuilder.group({
    mGrasa: ['', [Validators.required, Validators.minLength(2), Validators.min(5), Validators.max(80)]],
    mVisceral: ['', [Validators.required, Validators.minLength(2), Validators.min(1), Validators.max(25)]],
    altura: ['', [Validators.minLength(2), Validators.min(100), Validators.max(270)]],
    peso: ['', [Validators.minLength(2), Validators.min(35), Validators.max(150)]],
    edad: ['', [Validators.minLength(1), Validators.min(5), Validators.max(22)]],
    mMuscular: ['', [Validators.minLength(1), Validators.min(15), Validators.max(60)]]

  })
  get errorControl() {
    return this.ionicForm.controls;
  }
  async saveParams() {
    this.storage.get("curso").then(data => {
      this.cursos = data;

    });
    this.storage.get("centro").then(data => {
      this.centro = data;
    })
  }
  submitForm(form) {
    console.log(this.curso);
    this.isSubmitted = true;
    
    
    let health: Healths = {
      idHealths: null,
      masa_Grasa: this.ionicForm.controls["mGrasa"].value,

      masa_Viseral: this.ionicForm.controls["mVisceral"].value,
      idCursos: this.curso.idCursos,
      idCentros: this.centro.idCentro,
      masa_Muscular: this.ionicForm.controls["mMuscular"].value,
      altura: this.ionicForm.controls["altura"].value,
      peso: this.ionicForm.controls["peso"].value,
      edad: this.ionicForm.controls["edad"].value,
    }
   
    this.healthService.postHealth(health).subscribe((res) => {

      this.handleButtonClick(health);
      this.ionicForm.reset();
    });

  }
  async handleButtonClick(health) {
    const alert = await this.alertController.create({
      header: 'Usuario creado',
      message: "Id: "+health.idHealths,
      buttons: ['Agree']
    });

    await alert.present();
  }
  compareWith(o1: Cursos, o2: Cursos) {
    return o1 && o2 ? o1.idCursos === o2.idCursos : o1 === o2;
  }
  public errorMessages = {
    mGrasa: [
      { type: 'required', message: 'mGrasa is required' },
      { type: 'min', message: 'Name cant be longer than 5 characters' }
    ],
    mVisceral: [
      { type: 'required', message: 'mVisceral is required' },
      { type: 'min', message: 'Introduce un numero valido' }
    ],
    altura: [

      { type: 'min', message: 'No puede medir menos de 100cm' }
    ],
    peso: [

      {
        type: 'min',
        message: 'No puede pesar menos de 35 kilos'
      }
    ],
    edad: [

      {
        type: 'maxlength',
        message: 'City name cant be longer than 100 characters'
      }
    ],
    mMuscular: [

      {
        type: 'min',
        message: '15'
      }
    ]
  };
}

