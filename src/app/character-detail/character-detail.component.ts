import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  public name: string = '';
  public id: string = "";
  public created : string = "";
  public episode: any[] = [];
  public gender:string = "";
  public image:string = "";
  public location: any = null;
  public origin: any = null;
  public species:string = "";
  public status:string = "";
  public type: string = "";
  public location_id: string = "";
  public origin_id: string = "";
  constructor(private route: ActivatedRoute,
  private characterService : PersonajeService) { }

  ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getCharacterById(this.id);
  }
 getCharacterById(id : string = "") {
       this.characterService.getCharacterById(id).subscribe(response => {
         this.name=response.name;
         this.image=response.image;
         this.gender = response.gender;
         this.status =  response.status;
         this.species = response.species;
         this.episode = response.episode;
         this.origin = response.origin;
         this.location = response.location;
         if(this.location.name != 'unknown'){
            this.location_id=response.location.url.replace("https://rickandmortyapi.com/api/location/","");
         }
         if(this.origin.name != 'unknown'){
            this.origin_id=response.origin.url.replace("https://rickandmortyapi.com/api/location/","");
         }
       })
 }

}
