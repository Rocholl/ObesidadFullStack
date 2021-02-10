import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Centro } from '../Models/Centro';
import { Cursos } from '../Models/Cursos';
import { Healths } from '../Models/Healths';
import { AuthService } from '../services/auth.service';
import { HealthsService } from '../services/healths.service';

@Component({
  selector: 'app-user-class-students',
  templateUrl: './user-class-students.page.html',
  styleUrls: ['./user-class-students.page.scss'],
})
export class UserClassStudentsPage implements OnInit {
curso: Cursos[];
cursos: Cursos;
idCentro: number;
students: Healths[];
  constructor(  private auth:AuthService,private healthService: HealthsService,private router:Router,private storage:Storage,private menuCtrl: MenuController) { }
  toggleMenu() {
    this.menuCtrl.toggle();
  
  }
  ngOnInit() {
    this.storage.get("user").then(data=>{
      this.idCentro = data.idCentro;
      
    })
    this.storage.get("class").then(data=>{
     this.curso= data;
      console.log(data);
    })
  }
addHealth(){
  console.log(this.cursos)
  console.log(this.idCentro)
this.healthService.getByCurso(this.cursos.idCursos,this.idCentro).subscribe(data=>{

this.students= data;
 
});



}
doRefresh(event){
setTimeout(()=>{
  console.log(this.students);
this.addHealth();
event.target.complete();
},1000)

}
show(){

}
addRecord(id){
  this.storage.set("idHealth",id);
  this.router.navigateByUrl("form-health");
}
}
