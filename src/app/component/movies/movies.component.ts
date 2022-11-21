import { HttpClientMovieService } from '../../Services/http-client-movie.service';
import { Component, OnInit } from '@angular/core';
import { Movies } from '../../models/Movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies:Movies[];

  constructor(private http:HttpClientMovieService) { }

  ngOnInit(): void {
    this.http.getAllMovies().subscribe(data=>{
      this.movies=data;
    })
  }
}
