import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular Application';
  name = "Deniz Duman";
  model = new Model();
  isFiltered = true;
  
  addItem(task: string) {
     if(task != ""){
        this.model.items.push(new TodoItem(task,false));
     }
  }

  getName() {
    return this.model.user;
  }

  getItems() {
    if(this.isFiltered){
      return this.model.items.filter(item => !item.action);
    }
    return this.model.items;
  }

}
