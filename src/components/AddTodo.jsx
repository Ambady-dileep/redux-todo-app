import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(addTodo(trimmed));
    setText("");
  }

  return (
    <form className="add-todo-form" onSubmit={handleAdd}>
      <motion.input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input"
        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px var(--accent)" }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
      <motion.button
        type="submit"
        className="add-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Plus size={20} />
        <span>Add</span>
      </motion.button>
    </form>
  )
}

export default AddTodo;