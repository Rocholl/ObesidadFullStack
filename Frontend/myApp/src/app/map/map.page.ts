import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';
import { CentrosService } from '../services/centros.service';
import { Centro } from '../Models/Centro';
import { HealthsService } from '../services/healths.service';
import { Healths } from '../Models/Healths';
import { MapArray } from '../Models/mapArray';

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
  focusmapLong = -15.43;
  centros: Centro[];
  mapMarkers: any[] = [];

  constructor(
    private menuCtrl: MenuController,
    private centroService: CentrosService,
    private healthService: HealthsService) {


    this.getAllCentros();

  }
  ionViewWillEnter() {

  }
  ngOnInit() {
  }
  getAllHealth() {
    this.healthService.getAll().subscribe(healths => {

      console.log(healths);

      for (let centro of this.centros) {
        let marker = new MapArray;


        let mediaGrasa = 0;
        let mediaViseral = 0;
        let i = 0;
        let media1: number[] = [0];
        let media2: number[] = [0];
        for (let health of healths) {

          if (centro.idCentro == health.idCentros) {

            media1.push(health.masa_Grasa);
            media2.push(health.masa_Viseral);
          }
        }
        let sum = media1.reduce((previous, current) => current += previous);
        mediaGrasa = sum / media1.length;
        sum = media2.reduce((previous, current) => current += previous);
        mediaViseral = sum / media2.length;
        marker.idCentro = centro.idCentro;
        marker.nombre = centro.nombre;
        marker.lat = centro.lat;
        marker.long = centro.long;
        marker.masa_Grasa = mediaGrasa;
        marker.masa_Grasa = mediaViseral;

        if (mediaGrasa < 7) {
          marker.type = "alto";
        } else if (mediaGrasa > 7 && mediaGrasa < 5) {
          marker.type = "medio";
        } if (mediaGrasa < 5) {
          marker.type = "bajo";
        } else {
          marker.type = "default";
        }




        this.mapMarkers.push(marker);



      }
    })



  }

  getAllCentros() {
    this.centroService.getCentros().subscribe(centros => {
      this.centros = centros;
      this.getAllHealth();
    });
  }
  ionViewDidEnter() {
    this.showMap();
  }
  addMarkersToMap() {
    const iconBase = "https://maps.google.com/mapfiles/kml/paddle/";
    const icons: Record<string, any> = {
      alto: {
        name: "Alto",
        icon: iconBase + "parking_lot_maps.png",
      },
      medio: {
        name: "Medio",
        icon: iconBase + "ylw-blank.png",
      },
      bajo: {
        name: "Bajo",
        icon: iconBase + "grn-blank.png",
      },
      default: {
        name: "Default",
        icon: iconBase + "wht-blank.png",
      }
    };
    console.log(this.mapMarkers);
    for (let marker of this.mapMarkers) {
      let mapMarker = null;
      let position = new google.maps.LatLng(marker.lat, marker.long);
      mapMarker = new google.maps.Marker({
        position: position,
        title: marker.nombre,
        masa_grasa: marker.masa_Grasa,
        masa_viseral: marker.masa_Viseral,
        latitude: marker.lat,
        longitude: marker.long,
        icon: icons[marker.type].icon
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
      '<p>Masa Grasa: ' + marker.masa_grasa + '</p>' +
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
    for (let window of this.infoWindows) {
      window.close();
    }
  }
  showMap() {
    const location = new google.maps.LatLng(this.focusmapLat, this.focusmapLong);
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
