import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';
import { CentrosService } from '../services/centros.service';
import { Centro } from '../Models/Centro';
import { HealthsService } from '../services/healths.service';
import { Healths } from '../Models/Healths';

declare var google: any;



@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})




export class MapPage implements OnInit {

  map: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  infoWindows: any = [];
  focusmapLat = 28.1248;
  focusmapLong= -15.43;
  centro : Centro[];
  health: Healths[];
  constructor(
    private menuCtrl: MenuController,
    private centroService:CentrosService,
    private healthService:HealthsService) {    this.getAllCentros();}
    ionViewWillEnter(){
   
    }
  ngOnInit() {
  }
  getAllHealth(id){
    this.healthService.getCentros(id).subscribe(health=>{
      this.health= health;
    })



  }
  getAllCentros(){
    this.centroService.getCentros().subscribe( centros => {
      this.centro = centros;
      
    });
}
  ionViewDidEnter() {
    this.showMap();
  }
  addMarkersToMap() {
    console.log(this.centro);
    for (let centro of this.centro) {
      let sumMasa_Grasa:number;
      let sumMasa_Viseral:number;
      this.getAllHealth(centro.idCentro);
      console.log(this.health);
      for(let health of this.health){
        sumMasa_Grasa += health.masa_Grasa;
        sumMasa_Viseral+=health.masa_Viseral;

      }
      let position = new google.maps.LatLng(centro.lat, centro.long);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: centro.nombre,
        masa_grasa: sumMasa_Grasa,
        latitude: centro.lat,
        longitude: centro.long
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }
  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
                            '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }
  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }
  showMap() {
    const location = new google.maps.LatLng(this.focusmapLat,this.focusmapLong);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
    this.addMarkersToMap();
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
