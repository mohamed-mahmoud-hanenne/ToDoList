import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  title : string = "To Do List App";
  imgLink : string = "https://i.pinimg.com/564x/6e/bf/6f/6ebf6f1eea0f9e8245e1f4a941af2e64.jpg";

  tasks : string[] = [];
  newtask :string = "";
  isAvailable : boolean = false;

  addTask(){
    if(this.newtask !=="")
    this.tasks.push(this.newtask)
    this.newtask = "";
    this.isAvailable = true;
  }

  deleteTask(index:number){
    this.tasks.splice(index,1);
    this.isAvailable = this.tasks.length > 0
  }

  // editTask(index:number){
  //   let updatetask = prompt("Edit task",this.tasks[index]);
  //   if(updatetask !== null){
  //     this.tasks[index] = updatetask
  //   }
  // }

  editTask(index:number,newtaskedit:string) :string|void{
   const taskedit = newtaskedit
   if(taskedit !==""){
    this.tasks[index] = taskedit
    
   }
   else{
    newtaskedit = this.tasks[index];
    return this.newtask = newtaskedit
   }
   this.newtask = ""
  }
}
