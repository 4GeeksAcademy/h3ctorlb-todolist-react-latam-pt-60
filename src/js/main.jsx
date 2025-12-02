import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Estilos
import "../styles/index.css";

const App = () => {
  // ========== ESTADOS ==========
  // Estados para IDEAS
  const [ideasInput, setIdeasInput] = useState("");
  const [ideasList, setIdeasList] = useState([]);

  // Estados para JOURNAL
  const [journalInput, setJournalInput] = useState("");
  const [journalList, setJournalList] = useState([]);

  // Estados para TODOLIST
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  // ========== FUNCIONES ==========
  // Función para agregar idea
  const handleAddIdea = () => {
    if (ideasInput.trim() === "") return;
    setIdeasList([...ideasList, ideasInput]);
    setIdeasInput("");
  };

  // Función para eliminar idea
  const handleDeleteIdea = (indexToDelete) => {
    setIdeasList(ideasList.filter((_, index) => index !== indexToDelete));
  };

  // Función para agregar nota de journal
  const handleAddJournal = () => {
    if (journalInput.trim() === "") return;
    setJournalList([...journalList, journalInput]);
    setJournalInput("");
  };

  // Función para eliminar nota de journal
  const handleDeleteJournal = (indexToDelete) => {
    setJournalList(journalList.filter((_, index) => index !== indexToDelete));
  };

  // Función para agregar tarea de TODO
  const handleAddTodo = () => {
    if (todoInput.trim() === "") return;

    // Separar tarea y fecha
    const parts = todoInput.split(" - ");
    const task = parts[0].trim();
    const date = parts[1] ? parts[1].trim() : "";

    // Crear objeto con tarea y fecha
    const newTodo = {
      task: task,
      date: date,
    };

    setTodoList([...todoList, newTodo]);
    setTodoInput("");
  };

  // Función para eliminar tarea de TODO
  const handleDeleteTodo = (indexToDelete) => {
    setTodoList(todoList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">BRAIN DUMP</h1>
      </header>

      {/* SECCIÓN 1: TODOLIST - TABLA */}
      <section className="section">
        <h2 className="section-title">📝 TODOLIST</h2>
        <div className="section-content">
          <input
            type="text"
            className="task-input"
            placeholder="Agregar tarea + fecha (ej: Comprar leche - 15/01)"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddTodo();
              }
            }}
          />
          <div className="todo-table">
            {todoList.length === 0 ? (
              <p className="empty-message">No hay tareas, añadir tareas</p>
            ) : (
              <table className="task-table">
                <thead>
                  <tr>
                    <th>TAREA</th>
                    <th>FECHA</th>
                    <th>ACCIÓN</th>
                  </tr>
                </thead>
                <tbody>
                  {todoList.map((todo, index) => (
                    <tr key={index} className="table-row">
                      <td>{todo.task}</td>
                      <td>{todo.date}</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteTodo(index)}
                        >
                          ❌
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: IDEAS - LISTA SIMPLE */}
      <section className="section">
        <h2 className="section-title">💡 IDEAS</h2>
        <div className="section-content">
          <input
            type="text"
            className="task-input"
            placeholder="Agregar idea..."
            value={ideasInput}
            onChange={(e) => setIdeasInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddIdea();
              }
            }}
          />
          <div className="ideas-list">
            {ideasList.length === 0 ? (
              <p className="empty-message">Sin ideas por ahora...</p>
            ) : (
              ideasList.map((idea, index) => (
                <div key={index} className="list-item">
                  <span>• {idea}</span>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteIdea(index)}
                  >
                    ❌
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: JOURNAL - LISTA SIMPLE */}
      <section className="section">
        <h2 className="section-title">📓 JOURNAL</h2>
        <div className="section-content">
          <input
            type="text"
            className="task-input"
            placeholder="Agregar nota..."
            value={journalInput}
            onChange={(e) => setJournalInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddJournal();
              }
            }}
          />
          <div className="journal-list">
            {journalList.length === 0 ? (
              <p className="empty-message">Empieza a escribir...</p>
            ) : (
              journalList.map((nota, index) => (
                <div key={index} className="list-item">
                  <span>• {nota}</span>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteJournal(index)}
                  >
                    ❌
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
