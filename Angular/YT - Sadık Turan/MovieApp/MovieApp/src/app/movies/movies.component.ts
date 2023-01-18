import { Component } from "@angular/core";
import { Movie } from "../data/movie";
import { MovieService } from "../movie.service";

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
   movies: Movie[] | undefined;
   selectedMovie: Movie = {id:0,name:""};
 
   constructor(private movieService:MovieService) {}

   ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.getMovies();
   }

   getTitle() {
      return this.title;
   }

   onSelect(movie:Movie) : void{
      this.selectedMovie = movie;
   }

   getMovies():void{
      this.movieService.getMovies().subscribe(movies => {
                                           this.movies = movies;
                                      });
   }

}