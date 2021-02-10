import { Component, OnInit, ViewChild } from '@angular/core';
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
  
	@ViewChild('recordSlider') recordSlider;
  cursos: Cursos[];
  cursoId: number;
  centroId: number;
  centro: Centro;
  curso: Cursos;
  isSubmitted = false;
  health:Healths;
  sex;
  Tanita: FormGroup;
  Tanita2: FormGroup;
  Manual: FormGroup;

  constructor(private router: Router,private menuCtrl: MenuController,private alertController:AlertController, private auth: AuthService, private healthService: HealthsService, private centroService: CentrosService, private storage: Storage, public formBuilder: FormBuilder) {
    this.Tanita = formBuilder.group({
      peso: ["23",Validators.compose([Validators.maxLength(2),Validators.min(20),Validators.max(99)])],
      percent_Grasa: ["", Validators.compose([Validators.maxLength(2),Validators.min(5),Validators.max(50)])],
      percent_Hidratacion: ["",Validators.compose([Validators.maxLength(2),Validators.min(40),Validators.max(80)])],
      peso_Muscular: ["",Validators.compose([Validators.maxLength(2),Validators.min(5),Validators.max(40)])],
      masa_Muscular: ["",Validators.compose([Validators.maxLength(15),Validators.min(15),Validators.max(40)])],

    });
    this.Tanita2 = formBuilder.group({
      peso_Oseo: ["",Validators.compose([Validators.maxLength(2),Validators.min(1),Validators.max(5)])],
      kilocalorias: ["", Validators.compose([Validators.maxLength(4),Validators.min(1000),Validators.max(4000)])],
      edad_Metabolica: ["",Validators.compose([Validators.maxLength(2),Validators.min(5),Validators.max(25)])],
      masa_Viseral: ["",Validators.compose([Validators.maxLength(15),Validators.min(10),Validators.max(40)])],

    })
   
   this.Manual = formBuilder.group({
    altura: ["",Validators.compose([Validators.maxLength(3),Validators.min(120),Validators.max(220)])],
    perimetro_Abdominal: ["", Validators.compose([Validators.maxLength(3),Validators.min(75),Validators.max(120)])],
    actividad_Fisica: ["",Validators.compose([Validators.maxLength(2),Validators.min(0),Validators.max(7)])],
   

  });
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  //forms
  next(){
    this.recordSlider.slideNext();
  }
  prev(){
    this.recordSlider.slidePrev();

  }
  ngOnInit() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl("/login");

    }
    this.saveParams();

  }
  
 
  async saveParams() {
  await  this.storage.get("class").then(data => {
      this.cursos = data;

    });
    this.storage.get("centro").then(data => {
      this.centro = data;
    })
  }
  submitForm() {
    this.isSubmitted = true;

    if(!this.Tanita.valid){
        this.recordSlider.slideTo(0);
    } 
    else if(!this.Tanita2.valid){
        this.recordSlider.slideTo(1);
    }  else if(!this.Manual.valid){
      this.recordSlider.slideTo(2);
  }
    else {
        console.log("success!")
        console.log(this.Tanita.value);
        console.log(this.Tanita2.value);
        console.log(this.Manual.value);
    }
  /*  console.log(this.curso);
    this.isSubmitted = true;
    
    
    let health: Healths = {
      idHealths: null,
      masa_Grasa: this..controls["mGrasa"].value,

      masa_Viseral: this..controls["mVisceral"].value,
      idCursos: this.curso.idCursos,
      idCentros: this.centro.idCentro,
      masa_Muscular: this..controls["mMuscular"].value,
      altura: this..controls["altura"].value,
      peso: this..controls["peso"].value,
      edad: this..controls["edad"].value,
    }
   
    this.healthService.postHealth(health).subscribe((res) => {

      this.handleButtonClick(health);
      this..reset();
    });
*/
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
  
}

