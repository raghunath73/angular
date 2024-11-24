// app.component.ts
import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo';
  userList: any[] = [];

  constructor(private fetchService: FetchDataService) {}

  ngOnInit(): void {
    // Fetch the user data when the component initializes
    this.fetchService.getUser().subscribe(
      (user) => this.userList = user,
      (error) => console.error('Error fetching users', error) // Error handling
    );
  }
}
