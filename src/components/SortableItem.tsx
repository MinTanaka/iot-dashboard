import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export interface SortableItemProps {
    id: string;
    children: React.ReactNode;
}

const SortableItem:React.FC<SortableItemProps> = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        isDragging
      } = useSortable({ 
        id: props.id 
      });

      const style = {
        transform: CSS.Transform.toString(transform),
      };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
          {props.children}
    </div>
  );
};

export default SortableItem;