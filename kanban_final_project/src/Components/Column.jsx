import React from "react";

import { useDroppable } from "@dnd-kit/core";
import { TaskCard } from "./Task";

const Column = ({ column, tasks }) => {
  const { setNodeRef } = useDroppable({
    id: column.id
  });
  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-400 p-4">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default Column;
