import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie';
import { config } from '../config';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  movies: Movie[];
  moviesToWatch: Movie[] = [{
    poster_path: '/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg'
  }];
  constructor(private movieService: MovieService) {
    this.getMovies();
  }
  private async getMovies() {
    const movies = await this.movieService.get(config.api.topRated);
    return this.formatDta(movies.json().results);
  }
  formatDta(_body: Movie[]): void {
    this.movies = _body.filter(movie => movie.poster_path !== '/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg');
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
