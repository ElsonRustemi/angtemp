import { Component, OnInit,  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import  * as L from 'leaflet';
import 'leaflet-search';
import Search from "leaflet-search/dist/leaflet-search.src.js";
import { Modal } from 'bootstrap'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-viewmap',
  templateUrl: './viewmap.component.html',
  styleUrls: ['./viewmap.component.scss']
})
export class ViewmapComponent implements OnInit, AfterViewInit {

  @ViewChild('modalAddPath') modalAddPath: NgbModal;

  addPathModal: Modal;

  private map: L.Map;
  // private mapContainer: ElementRef<HTMLElement>;

  constructor(private modalService: NgbModal) { }



  private initMap(): void {
    this.map = L.map('map', {
      center: [ 41.1533, 20.1683 ],
      zoom: 3
    });

    // var searchLayer = L.geoJson().addTo(map);
    // //... adding data in searchLayer ...
    // L.map('map', { searchControl: {layer: searchLayer} });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const markersLayer = new L.LayerGroup(); //layer contain searched elements
    this.map.addLayer(markersLayer);

    const controlSearch = new Search({
      url: "https://nominatim.openstreetmap.org/search?format=json&q={s}",
      jsonpParam: "json_callback",
      propertyName: "display_name",
      propertyLoc: ["lat", "lon"],
      marker: false, //L.circleMarker([0, 0], { radius: 30 }),
      autoCollapse: true,
      //autoType: false,
      minLength: 2
    });

    this.map.addControl(controlSearch);

    controlSearch.on("search:locationfound", function(e) {
      const popup = L.popup({})
        .setLatLng(e.latlng)
        .setContent("<h2>Place has been found!</h2>")
        .openOn(this.map);
    });

    tiles.addTo(this.map);



  }



  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initMap();
  }

  addPath() {
    this.modalService.open(this.modalAddPath , { size: <any>'lg' });
  }

}
