import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import uuid from "uuid/v4";
import { v4 as uuidv4 } from 'uuid';
const itemsOne = [
    { id: uuidv4(), content: "First task" },
];

const itemsTwo = [
    { id: uuidv4(), content: "First task" },

];

const itemThree = [
    { id: uuidv4(), content: "First task" },
    { id: uuidv4(), content: "Second task" },
    { id: uuidv4(), content: "Third task" },
];

const columnsFromBackend = {
    [uuidv4()]: {
        name: "Không thuộc bước thực hiện nào",
        items: itemsOne
    },
    [uuidv4()]: {
        name: "Thanh toán đơn hàng",
        items: itemsTwo
    },
    [uuidv4()]: {
        name: "Hoàn tất nhập thiết bị",
        items: itemThree
    },
    [uuidv4()]: {
        name: "Giao hàng",
        items: []
    },
    [uuidv4()]: {
        name: "Thành công",
        items: []
    }
};

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

const TreeView = () => {
    const [columns, setColumns] = useState(columnsFromBackend);
    return (
        <div
            // style={{ display: "flex", justifyContent: "center", height: "100%" }}>
            style={{ display: "flex" }}>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                            key={columnId}
                        >
                            <div
                                style={{
                                    background: "#27b699",
                                    width: 330,
                                }}
                                className="flex justify-between">
                                <div>
                                    <h2 className="font-bold text-white py-2 px-1">
                                        {column.name}
                                    </h2>
                                </div>
                                <div className="items-center">
                                    <h2 className="font-bold text-white rounded bg-gray-400 mt-2 px-2 mr-1">
                                        2
                                    </h2>
                                </div>
                            </div>
                            <div style={{ margin: 8 }}>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver
                                                        ? "lightblue"
                                                        : "lightgrey",
                                                    padding: 4,
                                                    width: 330,
                                                    minHeight: 300
                                                }}
                                            >
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            userSelect: "none",
                                                                            padding: 16,
                                                                            margin: "0 0 8px 0",
                                                                            minHeight: "50px",
                                                                            backgroundColor: snapshot.isDragging
                                                                                ? "#263B4A"
                                                                                : "#456C86",
                                                                            color: "white",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        {item.content}
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
}

export default TreeView;
