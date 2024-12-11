import React, { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:8080/todos");
    setTodos(res.data);
  };

  const createTodo = async () => {
    await axios.post("http://localhost:8080/todos", newTodo);
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete(`http://localhost:8080/todos/${id}`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">To-Do App</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mr-2"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 mr-2"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
        />
        <button onClick={createTodo} className="bg-blue-500 text-white px-4">
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between mb-2">
            <span>
              {todo.title}: {todo.description}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
