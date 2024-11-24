// app.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.dataService.getItems().subscribe(
      data => {
        this.items = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching data', error);
        this.errorMessage = 'Failed to load items';
        this.isLoading = false;
      }
    );
  }
}
