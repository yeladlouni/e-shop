import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {
  categories = ['IT', 'Home', 'Bureau'];

  @Output() category = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  OnSelectCategory(selectedCategory: string) {
    this.category.emit(selectedCategory);
  }

}
