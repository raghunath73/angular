import { Component } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  items = [
    { name: 'Apple', price: 1.2 },
    { name: 'Banana', price: 0.5 },
    { name: 'Cherry', price: 2.0 },
  ];

  newItemName: string = '';
  newItemPrice: number | null = null;

  addItem() {
    // Ensure name and price are valid before adding
    if (this.newItemName.trim() && this.newItemPrice !== null && this.newItemPrice > 0) {
      this.items.push({
        name: this.newItemName,
        price: this.newItemPrice
      });
      // Clear input fields after adding
      this.newItemName = '';
      this.newItemPrice = null;
    } else {
      alert('Please enter a valid name and price.');
    }
  }
}