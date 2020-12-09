import { Component, OnInit } from '@angular/core';
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
  centro:any;
  cursos:any[];
  constructor(private obj:ObjectSenderService,private centroService: CentrosService,
    private healthService: HealthsService,private cursoService:CursosService) { }

  ngOnInit() {
    this.obj.$getObjectSource.subscribe(data => {
    
      this.user = data;
    }).unsubscribe();
  this.centroService.getCentroId(this.user.idCentro).subscribe(centro=>{
    console.log(centro)
    this.centro= centro;
  }).unsubscribe();;
  this.cursoService.getCursosByUserId(this.user.id).subscribe(curso=>{
    this.cursos= curso;
  }).unsubscribe();;
  }
  
}
