import { Component, Input } from '@angular/core';
import { Movie } from '../data/movie';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
    @Input() movie:Movie = {id:0,name:""}; // input ile veriyi alır.
    
}
