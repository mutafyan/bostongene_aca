import { v4 as uuidv4 } from "uuid"; // unique id

// task data model
export default class Task {
  constructor(title, description) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.createdAt = new Date();
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  update(title, description) {
    this.title = title;
    this.description = description ?? this.description;
    this.updatedAt = new Date();
  }
}
