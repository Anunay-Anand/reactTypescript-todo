// Defining the props structure
class Todo {
  // These two define the structure of the object
  id: string;
  text: string;

  // Here we define where the value will come from
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
