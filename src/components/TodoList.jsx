import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todo/todoSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Check, Circle } from "lucide-react";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      <AnimatePresence mode="popLayout">
        {todos.map((todo) => (
          <motion.li
            key={todo.id}
            layout
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <motion.button
              type="button"
              className="toggle-btn"
              onClick={() => dispatch(toggleTodo(todo.id))}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {todo.completed ? (
                <Check size={20} className="check-icon" />
              ) : (
                <Circle size={20} className="circle-icon" />
              )}
            </motion.button>

            <span
              className="todo-text"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>

            <motion.button
              type="button"
              className="delete-btn"
              onClick={() => dispatch(deleteTodo(todo.id))}
              whileHover={{ scale: 1.1, color: "var(--danger)" }}
              whileTap={{ scale: 0.9 }}
              title="Delete task"
            >
              <Trash2 size={20} />
            </motion.button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default TodoList;