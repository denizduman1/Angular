import { Injectable } from '@angular/core';
import { Movie } from './data/movie';
import { Movies } from './data/movie.datasource';
import { Observable,of } from "rxjs";
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(): Observable<Movie[]>{
    this.loggingService.add('MovieService: listing movies');
    return of(Movies);
  }  
  constructor(private loggingService: LoggingService) { }
}
