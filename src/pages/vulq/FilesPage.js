import { Layout, Menu, Button, Upload, message} from 'antd';

import { UploadOutlined, UserOutlined, VideoCameraOutlined, ProfileOutlined,
 	ArrowLeftOutlined, DesktopOutlined, SyncOutlined, TagOutlined, TeamOutlined, ToolOutlined,
 	InboxOutlined
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
	        	<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
			        <Menu.Item key="1">Files</Menu.Item>
			        <Menu.Item key="2">Images</Menu.Item>
			        <Menu.Item key="3">Audio</Menu.Item>
			        <Menu.Item key="4">Video</Menu.Item>
			    </Menu>
	        </Header>
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
	        	</div>
	        </Content>
	      </Layout>
	      <Sider
		      breakpoint="lg"
		      collapsedWidth="0"
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

export default FilesPage;