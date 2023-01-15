import { Component } from "@angular/core";
import { Movie } from "../data/movie";
import { Movies } from "../data/movie.datasource";

@Component({
   selector: 'movies', // <movies></movies>
   templateUrl: './movies.component.html',
   styles: [`
      h2{
         color: blue;
      }
   `]
})
export class MoviesComponent {
   title = 'Movie List';
   movies = Movies;
   getTitle() {
      return this.title;
   }

}