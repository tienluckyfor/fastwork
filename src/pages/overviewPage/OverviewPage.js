import { Input, Progress, Select, Table } from "antd";
import React from "react";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";

const { Option } = Select;
const { Search } = Input;

const OverviewPage = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Total Tasks Assigned",
      dataIndex: "taskAssigned",
      key: "taskAssigned",
    },
    {
      title: "Total Completed Tasks",
      dataIndex: "taskCompleted",
      key: "taskCompleted",
    },
    {
      title: "Total Late Tasks",
      key: "taskLated",
      dataIndex: "taskLated",
    },
    {
      title: "Total Logge Hours",
      key: "loggeHours",
      dataIndex: "loggeHours",
    },
  ];

  const columns1 = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      render: (progress) => (
        <Progress type="circle" percent={progress} width={40} />
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "Due Date",
      key: "dueDate",
      dataIndex: "dueDate",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      taskAssigned: 32,
      taskCompleted: 12,
      taskLated: 12,
      loggeHours: 160,
    },
    {
      key: "1",
      name: "John Brown",
      taskAssigned: 32,
      taskCompleted: 12,
      taskLated: 12,
      loggeHours: 160,
    },
    {
      key: "1",
      name: "John Brown",
      taskAssigned: 32,
      taskCompleted: 12,
      taskLated: 12,
      loggeHours: 160,
    },
    {
      key: "1",
      name: "John Brown",
      taskAssigned: 32,
      taskCompleted: 12,
      taskLated: 12,
      loggeHours: 160,
    },
    {
      key: "1",
      name: "John Brown",
      taskAssigned: 32,
      taskCompleted: 12,
      taskLated: 12,
      loggeHours: 160,
    },
  ];
  const data1 = [
    {
      key: "1",
      name: "John Brown",
      progress: 32,
      status: "In process",
      startDate: "22/10/2021",
      dueDate: "20/10/2021",
    },
    {
      key: "1",
      name: "John Brown",
      progress: 32,
      status: "In process",
      startDate: "22/10/2021",
      dueDate: "20/10/2021",
    },
    {
      key: "1",
      name: "John Brown",
      progress: 32,
      status: "In process",
      startDate: "22/10/2021",
      dueDate: "20/10/2021",
    },
    {
      key: "1",
      name: "John Brown",
      progress: 32,
      status: "In process",
      startDate: "22/10/2021",
      dueDate: "20/10/2021",
    },
    {
      key: "1",
      name: "John Brown",
      progress: 32,
      status: "In process",
      startDate: "22/10/2021",
      dueDate: "20/10/2021",
    },
  ];

  return (
    <section className="space-y-4 bg-gray-100 mt-12 ">
      <div className=" flex space-x-4 ">
        <div className="w-1/2 bg-white shadow-lg space-y-2 border-2">
            <DonutChart />
            <div className="grid grid-cols-4 text-lg text-center divide-x">
              <div className="text-red-500 font-medium">
                <p>Qua han</p>
                <p>24</p>
                <p>100% công việc</p>
              </div>
              <div className="text-yellow-600 font-medium">
                <p>HT Qua han</p>
                <p>24</p>
                <p>100% công việc</p>
              </div>
              <div className="text-yellow-500 font-medium">
                <p>Tam dung</p>
                <p>24</p>
                <p>100% công việc</p>
              </div>
              <div className="text-yellow-400 font-medium">
                <p>Quan trong</p>
                <p>24</p>
                <p>100% công việc</p>
              </div>
            </div>
        </div>
        <div className="w-1/2  shadow-lg border-2">
          <LineChart />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-4 bg-white p-6 text-lg border-2 shadow-lg">
          <div>
            <div className="flex justify-between">
              <p className="font-medium">10/11 Open Tasks</p>
              <i class="fas fa-check-circle my-auto"></i>
            </div>
            <div>9.09 %</div>
            <div>
              <Progress
                percent={30}
                strokeColor="green"
                showInfo={false}
                strokeWidth="10px"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="font-medium">140/173 Days Left</p>
              <i class="fas fa-calendar-check my-auto" ></i>
            </div>
            <div>10%</div>
            <div>
              <Progress
                percent={30}
                strokeColor="green"
                showInfo={false}
                strokeWidth="10px"
              />
            </div>
          </div>
        </div>
        <div className="bg-red-200 flex shadow-lg border-2">
          <div className="flex justify-between bg-white w-3/4 m-auto px-4 py-2">
            <div className="space-y-4">
              <p className="text-2xl font-medium">Ngay bat dau</p>
              <p className="text-blue-600 bg-blue-100 text-center py-2 text-xl ">
                01/03/2021
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-medium">Ngay ket thuc</p>
              <p className="text-red-500 bg-red-100 text-center py-2 text-xl ">
                16/12/2021
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-medium">Tinh trang</p>
              <p className="text-blue-600 bg-blue-100 text-center py-2 text-xl ">
                Binh thuong
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4 bg-white shadow-lg border-2" >
          <div className="border-b-2">
            <p className="text-2xl font-medium ml-6 py-2">List of members</p>
          </div>
          <div className="flex justify-between px-4 ">
            <div className="flex space-x-4">
              <div>
                <Select defaultValue="lucy" style={{ width: 120 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div>
                <p className="border text-lg px-2">export</p>
              </div>
            </div>
            <div>
              <Search placeholder="input search text" style={{ width: 200 }} />
            </div>
          </div>
          <div>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
        <div className="space-y-4 bg-white shadow-lg border-2">
          <div className="border-b-2">
            <p className="text-2xl font-medium ml-6 py-2">List of milestone</p>
          </div>
          <div className="flex justify-between px-4 ">
            <div className="flex space-x-4">
              <div>
                <Select defaultValue="lucy" style={{ width: 120 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div>
                <p className="border text-lg px-2">export</p>
              </div>
            </div>
            <div>
              <Search placeholder="input search text" style={{ width: 200 }} />
            </div>
          </div>
          <div>
            <Table columns={columns1} dataSource={data1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewPage;
