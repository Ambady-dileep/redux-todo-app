import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { motion } from "framer-motion";
import { ListTodo } from "lucide-react";
import "./App.css";

function App() {
  return (
    <motion.div
      className="app-container"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="app-header">
        <div className="icon-wrapper">
          <ListTodo size={32} color="var(--accent)" />
        </div>
        <h1>Redux Tasks</h1>
      </header>

      <main className="app-main">
        <AddTodo />
        <TodoList />
      </main>
    </motion.div>
  );
}

export default App;