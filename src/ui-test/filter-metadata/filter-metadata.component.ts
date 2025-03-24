import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ParentTast } from '../../shared/tast';
import { ReusableCardComponent } from '../reusable-card-component/reusable-card-component.component';

@Component({
  selector: 'app-filter-metadata',
  imports: [
    RouterOutlet,
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    ReusableCardComponent],
  templateUrl: './filter-metadata.component.html',
  styleUrl: './filter-metadata.component.scss'
})
export class FilterMetadataComponent {

  jobs : ParentTast = {
    name: 'Parent task',
    completed: false,
    subtasks: [
      {name: 'Child task 1', completed: false},
      {name: 'Child task 2', completed: false},
      {name: 'Child task 3', completed: false},
    ]
  }

}
