import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";

// const ColumnHeader = styled.div`
//   text-transform: uppercase;
//   margin-bottom: 20px;
// `;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #edf2fa;
`;

const DraggableElement = ({ prefix, elements }) => (
    <DroppableStyles>
        {/* <ColumnHeader>{prefix}</ColumnHeader> */}
        <div
            className="text-white font-bold px-3 py-3 flex justify-between"
            style={
                { background: "#27b699" }
            }>
            <div>
                {prefix}
            </div>
            <div className="px-2 py-0 bg-gray-300 rounded"> <span className="text-black" >5</span> </div>
        </div>
        <Droppable droppableId={`${prefix}`}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {elements.map((item, index) => (
                        <ListItem key={item.id} item={item} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
        <button style={{
            color: "#27b699"
        }}><i class="fas fa-plus" ></i> Thêm công việc</button>
    </DroppableStyles>
);

export default DraggableElement;
