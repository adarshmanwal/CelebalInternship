import { DndContext } from "@dnd-kit/core";
import Column from "./Column";

const GridView = ({handleDragEnd,loading,COLUMNS,tasks,users}) => {
  return (
    <div className="flex space-x-6 overflow-x-auto">
      <DndContext onDragEnd={handleDragEnd}>
        {!loading ? (
          COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.stage === column.id)}
                users={users}
              ></Column>
            );
          })
        ) : (
          <div className="flex justify-center items-center h-64 w-full">
            <p className="text-gray-500">Loading...</p>
          </div>
        )}
      </DndContext>
    </div>
  );
};

export default GridView;
