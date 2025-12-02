import React from "react";
import ReactDOM from "react-dom/client";

// Estilos
import "../styles/index.css";

const App = () => {
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
          />
          <div className="todo-table">{/* Aquí irá la tabla */}</div>
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
          />
          <div className="ideas-list">{/* Aquí irá la LISTA */}</div>
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
          />
          <div className="journal-list">{/* Aquí irá la LISTA */}</div>
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
