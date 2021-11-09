import React from "react";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks }) {
  return (
    <div className="task-list">
        {tasks.map((task, index) => (
            <TaskCard
                task={task}
                index={index}
                key={task.description}
            />
        ))}
    </div>
  );
}
