import { Component, Input, computed, signal, OnInit } from '@angular/core';
import { ParentTast } from '../../shared/tast';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-reusable-card-component',
  imports: [
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule
  ],
  templateUrl: './reusable-card-component.component.html',
  styleUrl: './reusable-card-component.component.scss'
})
export class ReusableCardComponent implements OnInit{
  @Input() task: ParentTast = { name: '', completed: false, subtasks: [] };;

  readonly myTask = signal(this.task);

  ngOnInit() {
    console.log(this.task);
    console.log(this.myTask);
  }

  readonly partiallyComplete = computed(() => {
    const currentTask = this.myTask();
    console.log(currentTask);
    if (!currentTask.subtasks) {
      return false;
    }
    return currentTask.subtasks.some(t => t.completed) && !currentTask.subtasks.every(t => t.completed);
  });

  update(completed: boolean, index?: number) {
    this.myTask.update(currentTask => {
      if (index === undefined) {
        currentTask.completed = completed;
        currentTask.subtasks?.forEach(t => (t.completed = completed));
      } else {
        currentTask.subtasks![index].completed = completed;
        currentTask.completed = currentTask.subtasks?.every(t => t.completed) ?? true;
      }
      return {...currentTask};
    });
  }
}
