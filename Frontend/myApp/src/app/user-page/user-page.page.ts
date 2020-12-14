import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Centro } from '../Models/Centro';
import { Usuario } from '../Models/Usuario';
import { ObjectSenderService } from '../service/object-sender.service';
import { AuthResponse } from '../services/auth.response';
import { CentrosService } from '../services/centros.service';
import { CursosService } from '../services/cursos.service';
import { HealthsService } from '../services/healths.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
})
export class UserPagePage implements OnInit {
  user:any;
  centro:Centro;
  
  constructor(private obj:ObjectSenderService,private centroService: CentrosService,
    private healthService: HealthsService,private cursoService:CursosService,private storage:Storage,private menuCtrl: MenuController) { }
    toggleMenu() {
      this.menuCtrl.toggle();
    }
  ngOnInit() {
    this.storage.get("user").then(data=>{
      this.user= data;
      console.log(data);
      this.cursoService.getCursosByUserId(this.user.idUsuarios).subscribe(curso=>{
        this.storage.set("class",curso);
        });
    }).catch().finally(()=>{
      this.saveParams();
    }) 

    

    
   
    }
    saveParams(){
      this.centroService.getCentroId(this.user.idCentros).subscribe(centro=>{
        console.log(this.user)
  
        this.centro= centro;
        this.storage.set("centro",centro);
        
      });
    
    }
  }
  
  

