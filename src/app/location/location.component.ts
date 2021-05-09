import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../services/location.service';
import { PersonajeService } from '../services/personaje.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  public residentes: any[] = [];
  public name: string = "";
  public type: string = "";
  public id: string = "";
  constructor(private route: ActivatedRoute,
                private locationService : LocationService,
                private characterService : PersonajeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLocationById(this.id);
  }
  getLocationById(id : string = "") {
         this.locationService.getLocationById(id).subscribe(response => {
           this.name=response.name;
           this.type=response.type;
           for (let url of response.residents){
              var characterId = url.replace("https://rickandmortyapi.com/api/character/","");
              this.characterService.getCharacterById(characterId).subscribe(character => {
                  this.residentes.push({'character_id':character.id,'image':character.image});
              });
           }
         });
   }

}
