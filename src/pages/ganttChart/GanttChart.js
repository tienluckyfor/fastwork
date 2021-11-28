import React from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  GanttComponent,
  Inject,
} from "@syncfusion/ej2-react-gantt";
// import "mobile-pages/ganttChart/GanttChart.css";
import { projectNewData } from "./data";
import "./GanttChart.css";

const data = [
  {
    TaskID: 1,
    TaskName: "Product concept",
    StartDate: new Date("04/02/2019"),
    EndDate: new Date("04/21/2019"),
  },
  {
    TaskID: 1,
    TaskName: "Product concept",
    StartDate: new Date("04/02/2019"),
    EndDate: new Date("04/21/2019"),
  },
  {
    TaskID: 1,
    TaskName: "Product concept",
    StartDate: new Date("04/02/2019"),
    EndDate: new Date("04/21/2019"),
  },
];
const GanttChart = () => {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
  };

  const editSettings = {
    allowEditing: true,
    allowTaskbarEditing: true,
  };
  const labelSettings = {
    taskLabel: "${taskData.progress}%",
  };
  

  
  const taskbarEditing = (props) => {
    props.taskBarEditAction === "ProgressResizing"
      ? (props.cancel = true)
      : (props.cancel = false);
  };

  

  return (
    <>
    <div className="bg-red-300 h-28">
        Đây sẽ là header 
    </div>
        <GanttComponent
          rowHeight={65}
          dataSource={data}
          taskFields={taskFields}
          height="450px"
        >
          <Inject services={[Edit]} />
          <ColumnsDirective>
            <ColumnDirective
              field="TaskName"
              headerText="Tac vu"
              width="100"
            ></ColumnDirective>
            
           
        
          </ColumnsDirective>
        </GanttComponent>
    </>
  );
};
export default GanttChart;
