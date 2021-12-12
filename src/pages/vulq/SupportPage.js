import { Layout, Menu, Button, Divider, message, Input, Select, Table, Tag } from 'antd';

import { ProfileOutlined, ArrowLeftOutlined, DesktopOutlined, SyncOutlined, TagOutlined, TeamOutlined, ToolOutlined,
 	BarChartOutlined, LockOutlined, DownOutlined
	} from '@ant-design/icons';

const SupportPage = () => {
	const { Header, Footer, Sider, Content } = Layout;

	const { Search } = Input;
	const onSearch = value => console.log(value);

	const { Option } = Select;


	const columns = [
	  {
	    title: '#',
	    dataIndex: 'key',
	  },
	  {
	    title: 'Subject',
	    dataIndex: 'subject',
	    // render: (text: string) => <a>{text}</a>,
	  },
	  {
	    title: 'Tag',
	    dataIndex: 'tag',
	  },
	  {
	    title: 'Department',
	    dataIndex: 'department',
	  },
	  {
	    title: 'Service',
	    dataIndex: 'service',
	  },
	  {
	    title: 'Contact',
	    dataIndex: 'contact',
	  },
	  {
	    title: 'Status',
	    dataIndex: 'status',
	    render: text => {
    		let color = text.length > 5 ? 'geekblue' : 'green';
    		 if (text === 'Open') {
	            color = 'green';
	          } else {
	            color = 'volcano';
	          }
	          return (
	          	<Tag color={color} className="rounded-none">
	              {text.toUpperCase()}
	            </Tag>
	          );
    		}
	  },
	  {
	    title: 'Priority',
	    dataIndex: 'priority',
	  },
	  {
	    title: 'Last Reply',
	    dataIndex: 'last_reply',
	  },
	  {
	    title: 'Created',
	    dataIndex: 'created',
	  },
	];

	interface DataType {
	  key: React.Key;
	  subject: string;
	  tag: string;
	  department: string;
	  service: string;
	  contact: string;
	  status: string;
	  priority: string;
	  last_reply: string;
	  created: string;
	}

	const data: DataType[] = [
	  {
		key: '1',
		subject: 'Hỗ trợ cấp văn phòng phẩm',
		tag: '',
		department: 'Cung Ứng Đấu Thầu',
		service: '',
		contact: 'Xuân',
		status: 'Open',
		priority: 'Medium',
		last_reply: '2021-11-4 15:23:13',
		created: '2021-11-4 15:20:05',
	  },
	  {
		key: '2',
		subject: 'Hỗ trợ vật tư xây dựng',
		tag: '',
		department: 'Cung Ứng Vật Tư',
		service: '',
		contact: 'Dũng',
		status: 'Pending',
		priority: 'Medium',
		last_reply: '2021-10-14 11:03:20',
		created: '2021-09-24 10:21:15',
	  },
	  {
		key: '3',
		subject: 'Hỗ trợ nhân sự',
		tag: '',
		department: 'Nhân Sự',
		service: '',
		contact: 'Nguyễn Văn Việt',
		status: 'Open',
		priority: 'High',
		last_reply: '2021-09-07 09:21:22',
		created: '2021-10-21 12:35:47',
	  },
	  
	];

	// rowSelection object indicates the need for row selection
	const rowSelection = {
	  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
	    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	  },
	  getCheckboxProps: (record: DataType) => ({
	    disabled: record.name === 'Disabled User', // Column configuration not to be checked
	    name: record.name,
	  }),
	};

	return (

		<div>
		<Layout>
	      	<Sider
		      breakpoint="lg"
		      collapsedWidth="0"
		      width="100"
		      onBreakpoint={broken => {
		        console.log(broken);
		      }}
		      onCollapse={(collapsed, type) => {
		        console.log(collapsed, type);
		      }}
		    >
		      <div className="m-4" >
		      	<Button icon={<ArrowLeftOutlined />} className="" >
		      	</Button>
		      </div>
		      <div className="border-b border-yellow-200" />
		      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
		        <Menu.Item key="2" icon={<DesktopOutlined />}>
		          
		        </Menu.Item>
		        <Menu.Item key="3" icon={<SyncOutlined />}>
		          
		        </Menu.Item>
		        <Menu.Item key="4" icon={<ProfileOutlined />}>
		          
		        </Menu.Item>
		        <Menu.Item key="5" icon={<TagOutlined />}>
		        </Menu.Item>
		        <Menu.Item key="6" icon={<TeamOutlined />}>
		        </Menu.Item>
		        <Menu.Item key="7" icon={<ToolOutlined />}>
		        </Menu.Item>
		      </Menu>
	      </Sider>
	      <Layout>
	        <Header className="">
	        	<div className="flex justify-between h-full">
	        		<div className="flex items-center">
	        			<h1 className="text-3xl text-green-200">Dự án 1</h1>
	        			<Button className="ml-8">Đang làm</Button>
	        		</div>
	        		<div className="flex items-center">
	        			<Button>New Task</Button>
	        		</div>
	        		
	        	</div>
	        </Header>
	        <Header>
	        	<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['5']}>
			        <Menu.Item key="1">Files</Menu.Item>
			        <Menu.Item key="2">Images</Menu.Item>
			        <Menu.Item key="3">Audio</Menu.Item>
			        <Menu.Item key="4">Video</Menu.Item>
			        <Menu.Item key="5">Support</Menu.Item>
			    </Menu>
	        </Header>
	        <Content>
	        	<div className="m-2 bg-white">
	        		<div className="p-2">
	        			<div className="flex justify-between">
	        				<div>
			        			<Button type="primary" className="rounded">NEW TICKET</Button>
			        			<Button icon={<BarChartOutlined />} className="rounded ml-1" />
			        		</div>
			        		<Button icon={<LockOutlined />} className="rounded ml-1" />
	        			</div>
		        		<Divider className="my-4" />
		        		<div>
		        			<h1 className="text-lg">Tickets Summary</h1>
		        			<div className="flex">
		        				<div className="flex-1">
			        				<p className="text-xl font-semibold">2</p>
			        				<p className="text-sm text-red-500">Open</p>
			        			</div>
			        			<div className="flex-1 flex">
			        				<Divider type="vertical" className="h-full" />
			        				<div>
			        					<p className="text-xl font-semibold">1</p>
			        					<p className="text-sm text-green-500">In Progress</p>
			        				</div>
			        			</div>
			        			<div className="flex-1 flex">
			        				<Divider type="vertical" className="h-full" />
			        				<div>
			        					<p className="text-xl font-semibold">0</p>
			        					<p className="text-sm text-blue-500">Answered</p>
			        				</div>
			        			</div>
			        			<div className="flex-1 flex">
			        				<Divider type="vertical" className="h-full" />
			        				<div>
			        					<p className="text-xl font-semibold">0</p>
			        					<p className="text-sm text-gray-300">On Hold</p>
			        				</div>
			        			</div>
			        			<div className="flex-1 flex">
			        				<Divider type="vertical" className="h-full" />
			        				<div>
			        					<p className="text-xl font-semibold">0</p>
			        					<p className="text-sm text-blue-400">Closed</p>
			        				</div>
			        			</div>
			        			<div className="flex-1 flex">
			        				<Divider type="vertical" className="h-full" />
			        				<div>
			        				</div>
			        			</div>
			        			
		        			</div>
		        			
		        		</div>
		        		<Divider className="" />
		        		<div>
		        			<div className="mb-2 flex justify-between">
			        			<div>
			        				<Select defaultValue="25"
			        					className="rounded-none mr-2">
								        <Option value="25">25</Option>
								        <Option value="50">50</Option>
								        <Option value="100">100</Option>
								    </Select>
				        			<Button className="rounded-none">EXPORT</Button>
				        			<Button className="rounded-none">BULK ACTIONS</Button>
				        			<Button icon={<SyncOutlined />} className="rounded-none"></Button>
			        			</div>
				        		<div>
				        			<Search placeholder="Search..." onSearch={onSearch} enterButton />
				        		</div>
			        		</div>
			        		<Table
						        rowSelection={{
						          type: 'checkbox',
						          ...rowSelection,
						        }}
						        columns={columns}
						        dataSource={data}
						    />
		        		</div>

		        	</div>
	        	</div>
	        	
	        </Content>
	      </Layout>
	      <Sider
		      breakpoint="lg"
		      collapsedWidth="0"
		      reverseArrow="true"
		      onBreakpoint={broken => {
		        console.log(broken);
		      }}
		      onCollapse={(collapsed, type) => {
		        console.log(collapsed, type);
		      }}
		    >
		      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
		      	className="mt-8"
		      >
		        <Menu.Item key="1" >
		          Customers
		        </Menu.Item>
		        <Menu.Item key="2" >
		          Contracts
		        </Menu.Item>
		        <Menu.Item key="3" >
		          Checkflow
		        </Menu.Item>
		        <Menu.Item key="4" >
		          Workplace
		        </Menu.Item>
		        <Menu.Item key="5" >
		          Expense
		        </Menu.Item>
		        <Menu.Item key="6" >
		          Request
		        </Menu.Item>
		        <Menu.Item key="7" >
		          Purchase
		        </Menu.Item>
		        <Menu.Item key="8" >
		          Warehouse
		        </Menu.Item>
		        <Menu.Item key="9" >
		          Category
		        </Menu.Item>
		        <Menu.Item key="10" >
		          Material
		        </Menu.Item>
		      </Menu>
		    </Sider>
	    </Layout>
	  </div>
	)
}

export default SupportPage;