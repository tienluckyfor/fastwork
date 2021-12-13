import { Layout, Menu, Button, Upload, message, Table, Image, Switch, Avatar, Tooltip, Dropdown, Input} from 'antd';

import { UploadOutlined, UserOutlined, VideoCameraOutlined, ProfileOutlined,
 	ArrowLeftOutlined, DesktopOutlined, SyncOutlined, TagOutlined, TeamOutlined, ToolOutlined,
 	InboxOutlined, MailOutlined, DeleteOutlined, DownOutlined
 } from '@ant-design/icons';

const { Dragger } = Upload;

const { Header, Footer, Sider, Content } = Layout;

const FilesPage = () => {

	const props = {
	  name: 'file',
	  multiple: true,
	  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	  onChange(info) {
	    const { status } = info.file;
	    if (status !== 'uploading') {
	      console.log(info.file, info.fileList);
	    }
	    if (status === 'done') {
	      message.success(`${info.file.name} file uploaded successfully.`);
	    } else if (status === 'error') {
	      message.error(`${info.file.name} file upload failed.`);
	    }
	  },
	  onDrop(e) {
	    console.log('Dropped files', e.dataTransfer.files);
	  },
	};

	const columns = [
	  {
	    title: 'Filename',
	    dataIndex: 'name',
	    render: (text, record) => <div>
	    	<Image
		      width={80}
		      // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
		      // src="https://cdn.stocksnap.io/img-thumbs/960w/bird-nature_HLUPTW4UYC.jpg"
		      src={record.fileLink}
		    />
		    <p>{record.name}</p>
	    </div>,
	  },
	  {
	    title: 'File type',
	    dataIndex: 'type',
	  },
	  {
	    title: 'Last Activity',
	    dataIndex: 'lastActivity',
	  },
	  {
	    title: 'Total Comments',
	    dataIndex: 'totalComments',
	  },
	  {
	    title: 'Visible to Customer',
	    dataIndex: 'visible',
	    render: (value: boolean) => <Switch defaultChecked={value} onChange={onVisibleChange} />,
	  },
	  {
	    title: 'Uploaded by',
	    dataIndex: 'uploadPerson',
	    render: (value: string) => <div>
	    	<Avatar icon={<UserOutlined />} />
	    	<span className="ml-1">{value}</span>
	    </div>
	  },
	  {
	    title: 'Date uploaded',
	    dataIndex: 'date',
	  },
	  {
	    title: 'Options',
	    dataIndex: 'options',
	    render: (value: string) => <div className="flex space-x-1">
		    <Tooltip title="Send email">
		      <Button type="primary" shape="circle" icon={<MailOutlined />} />
		    </Tooltip>
		    <Tooltip title="Delete">
		      <Button type="primary" shape="circle" danger icon={<DeleteOutlined />} />
		    </Tooltip>
		    
	    </div>
	  },
	];

	interface DataType {
	  key: React.Key;
	  name: string;
	  type: string;
	  lastActivity: string;
	  totalComments: number;
	  visible: boolean;
	  uploadPerson: string;
	  date: string;
	  options: string;
	  fileLink: string;
	}

	const data: DataType[] = [
	  {
	    key: '1',
	    name: 'Screenshot_2',
	    type: 'image/png',
	    lastActivity: 'No Activity',
	    totalComments: 0,
	    visible: true,
	    uploadPerson: 'Dzuan Huynh',
	    date: '2021-12-05 9:44:21',
	    options: 'x',
	    fileLink: 'https://cdn.stocksnap.io/img-thumbs/960w/bird-nature_HLUPTW4UYC.jpg',
	  },
	  {
	    key: '2',
	    name: 'Screenshot_3',
	    type: 'image/png',
	    lastActivity: 'No Activity',
	    totalComments: 0,
	    visible: false,
	    uploadPerson: 'Dzuan Huynh',
	    date: '2021-12-05 9:46:21',
	    options: 'x',
	    fileLink: 'https://cdn.stocksnap.io/img-thumbs/960w/business-team_V8NHXQVQ70.jpg',
	  },
	  {
	    key: '3',
	    name: 'Screenshot_4',
	    type: 'image/png',
	    lastActivity: 'No Activity',
	    totalComments: 0,
	    visible: true,
	    uploadPerson: 'Tran Si',
	    date: '2021-12-05  11:04:06',
	    options: 'x',
	    fileLink: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
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

	function onVisibleChange(checked) {
	  console.log(`switch to ${checked}`);
	}

	function handleMaxItemsMenuClick(e) {
	  message.info('Click on menu item.');
	  console.log('click', e);
	}

	const maxItemsMenu = (
	  <Menu onClick={handleMaxItemsMenuClick}>
	    <Menu.Item key="1">
	      25
	    </Menu.Item>
	    <Menu.Item key="2">
	      50
	    </Menu.Item>
	    <Menu.Item key="3">
	      100
	    </Menu.Item>
	  </Menu>
	)

	const { Search } = Input;
	const onSearch = value => console.log(value);

	return (
	  <div className="px-16">
		<Layout>
	      	{/*<Sider
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
	      </Sider>*/}
	      <Layout>
	        {/*<Header className="">
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
	        	<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
			        <Menu.Item key="1">Files</Menu.Item>
			        <Menu.Item key="2">Images</Menu.Item>
			        <Menu.Item key="3">Audio</Menu.Item>
			        <Menu.Item key="4">Video</Menu.Item>
			    </Menu>
	        </Header>*/}
	        <Content>
	        	<div className="m-4">
	        		<div>
		        		<Dragger {...props}>
						    <p className="ant-upload-drag-icon">
						      <InboxOutlined />
						    </p>
						    <p className="ant-upload-text">Click or drag file to this area to upload</p>
						    <p className="ant-upload-hint">
						      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
						      band files
						    </p>
					  	</Dragger>
		        	</div>
		        	<div>
		        		<p className="text-gray-500">
		        			Visible to Customer
		        		</p>
		        		<Switch defaultChecked onChange={onVisibleChange} />
		        	</div>
	        	</div>
	        	<div className="mx-4">
	        		<div className="mb-2 flex justify-between">
	        			<div>
	        				<Dropdown overlay={maxItemsMenu}>
						      <Button className="rounded-none mr-2">
						        25 <DownOutlined />
						      </Button>
						    </Dropdown>
		        			<Button className="rounded-none">EXPORT</Button>
		        			<Button className="rounded-none">BULK ACTIONS</Button>
		        			<Button className="rounded-none">DOWNLOAD ALL</Button>
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
				        pagination={{ pageSize: 10 }}
				    />
	        	</div>
	        </Content>
	      </Layout>
	      {/*<Sider
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
		    </Sider>*/}
	    </Layout>
	  </div>
	)
}

export default FilesPage;