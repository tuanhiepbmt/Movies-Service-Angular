import { Person } from '../../models/Person';
import { Component, OnInit } from '@angular/core';
import { HttpClientPersonService } from '../../Services/http-client-person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  public persons:Person[];

  constructor(private http: HttpClientPersonService) {  }

  ngOnInit(): void {
    this.http.getAllPersons().subscribe(data=>{
      this.persons=data;
    });
  }
}
