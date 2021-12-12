import { Layout, Menu, Button, Input, Avatar, Select, Tag, Progress, Dropdown, message, Divider, Tooltip } from 'antd';

import {
    ProfileOutlined,
    ArrowLeftOutlined, DesktopOutlined, SyncOutlined, TagOutlined, TeamOutlined, ToolOutlined,
    QuestionOutlined, BellOutlined, MessageOutlined, UserOutlined, StarOutlined, PlusOutlined,
    BorderOutlined, EllipsisOutlined, EditOutlined, PrinterOutlined, ExportOutlined,
    UsergroupAddOutlined, FileTextOutlined, BankOutlined, MoneyCollectOutlined, TransactionOutlined,
    ClockCircleOutlined, FlagFilled, RollbackOutlined
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;


const Dashboard = () => {

    const { Search } = Input;
    const onSearch = value => console.log(value);

    const options = [{ value: 'Dự án của Tôi', color: 'gold' }, { value: 'Dự án Cây Xanh', color: 'lime' }, { value: 'Dự án Nông Nghiệp Sạch', color: 'green' }, { value: 'Dự án Rác Thải', color: 'cyan' }];

    function tagRender(props) {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = event => {
            event.preventDefault();
            event.stopPropagation();
        };
        let result = options.filter(item => {
            return item.value === value
        });

        return (
            <Tag
                color={result[0].color}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{ marginRight: 3 }}
            >
                {value}
            </Tag>
        );
    }

    function handlePMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const p_menu = (
        <Menu onClick={handlePMenuClick}>
            <Menu.Item key="1" icon={<EditOutlined />}>
                Edit
            </Menu.Item>
            <Menu.Item key="2" icon={<PrinterOutlined />}>
                Print
            </Menu.Item>
            <Menu.Item key="3" icon={<ExportOutlined />}>
                Export
            </Menu.Item>
        </Menu>
    );

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
                    <Header>
                        <div className="flex">
                            <div className="w-1/4">
                                <div className=" block w-12 my-2">
                                    <img src="../../images/vulq/vintage-kancilan-farmers-market-logo-vector.webp" className="w-full h-auto" alt="logo image" />
                                </div>
                            </div>

                            <div className="w-3/4">
                                <div className="flex justify-around h-full">
                                    <div className="pt-2">
                                        <span className="text-3xl text-gray-100">00 : 00</span>
                                    </div>
                                    <div className="pt-1">
                                        <RollbackOutlined className="text-gray-100 text-2xl" />
                                    </div>
                                    <div className="pt-1">
                                        <FlagFilled className="text-gray-100 text-2xl" />
                                        <span className="text-gray-100">0</span>
                                    </div>
                                    <div className="flex flex-col justify-center h-full">
                                        <Search placeholder="Search..." onSearch={onSearch} enterButton />
                                    </div>
                                    <div className="flex flex-col justify-center h-full">
                                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                    </div>

                                    <div className="pt-1">
                                        <ClockCircleOutlined className="text-blue-100 text-2xl" />
                                    </div>

                                </div>
                            </div>

                        </div>


                    </Header>
                    <Content>
                        <div className="m-2">
                            <div className="bg-gradient-to-r from-blue-900 to-blue-300">
                                <div className="flex p-2">
                                    <p className="text-xl text-blue-100 whitespace-nowrap">Dự án</p>
                                    <StarOutlined className="text-xl ml-2 text-blue-100" />
                                    <Button type="primary" icon={<PlusOutlined />}
                                        className="rounded ml-7 mr-3">
                                        TẠO MỘT DỰ ÁN
                                    </Button>
                                    <Select
                                        mode="multiple"
                                        showArrow
                                        tagRender={tagRender}
                                        defaultValue={['Dự án của Tôi']}
                                        style={{ width: '100%' }}
                                        options={options}
                                    />
                                </div>

                            </div>
                            <div className="flex space-x-2">
                                <div className="p-2 flex w-1/2 bg-green-400 my-1 text-gray-100 text-lg cursor-pointer">
                                    <div className="flex-1 flex justify-center">
                                        <div className="flex flex-col justify-center h-full">
                                            <Progress type="circle" percent={58} format={percent => `${percent}`} />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col justify-center h-full">
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <BorderOutlined style={{ fontSize: '16px', backgroundColor: '#0040FF' }} />
                                                    <span className="ml-2">Kế hoạch</span>
                                                </div>
                                                <div>
                                                    <span>29 (50%)</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <BorderOutlined style={{ fontSize: '16px', backgroundColor: '#0F5BFF' }} />
                                                    <span className="ml-2">Đang làm</span>
                                                </div>
                                                <div>
                                                    <span>29 (50%)</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <BorderOutlined style={{ fontSize: '16px', backgroundColor: '#FF9C2A' }} />
                                                    <span className="ml-2">Tạm dừng</span>
                                                </div>
                                                <div>
                                                    <span>0 (0%)</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <BorderOutlined style={{ fontSize: '16px', backgroundColor: '#0FFF5B' }} />
                                                    <span className="ml-2">Hoàn thành</span>
                                                </div>
                                                <div>
                                                    <span>0 (0%)</span>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="p-2 flex w-1/2 bg-green-400 my-1 text-gray-100 text-lg cursor-pointer">
                                    <div className="flex-1 flex justify-center">
                                        <div className="flex flex-col justify-center h-full">
                                            <Progress type="circle" percent={75} format={percent => `${percent}`} />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col justify-center h-full">
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <BorderOutlined style={{ fontSize: '16px', backgroundColor: '#0040FF' }} />
                                                    <span className="ml-2">Bình thường</span>
                                                </div>
                                                <div>
                                                    <span>29 (50%)</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <BorderOutlined style={{ fontSize: '16px', backgroundColor: '#0FFF5B' }} />
                                                    <span className="ml-2">Tăng tốc</span>
                                                </div>
                                                <div>
                                                    <span>29 (50%)</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <BorderOutlined style={{ fontSize: '16px', backgroundColor: '#0F5BFF' }} />
                                                    <span className="ml-2">Lưu ý</span>
                                                </div>
                                                <div>
                                                    <span>0 (0%)</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <BorderOutlined style={{ fontSize: '16px', backgroundColor: '#FF9C2A' }} />
                                                    <span className="ml-2">Rủi ro</span>
                                                </div>
                                                <div>
                                                    <span>0 (0%)</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div>
                                                    <BorderOutlined style={{ fontSize: '16px', backgroundColor: '#FF4B4B' }} />
                                                    <span className="ml-2">Chậm trể</span>
                                                </div>
                                                <div>
                                                    <span>0 (0%)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 bg-white mt-2">
                                <div className="flex">
                                    <div className="w-1/3">
                                        <p className="text-lg font-semibold">
                                            Nhà máy xay xát lúa mì công suất 200T/ngày_Kho Tiến Hưng Bắc Ninh
                                        </p>
                                        <div className="flex">
                                            <div className="flex flex-col justify-center">
                                                <div className="rounded-full h-2 w-2 bg-blue-600"></div>
                                            </div>
                                            <p className="ml-2 font-semibold">Đang thực hiện</p>
                                        </div>
                                        <div className="my-2 text-gray-500 text-sm">
                                            <p>Mã dự án: TIẾN HƯNG BẮC NINH_2021</p>
                                            <p>Ngày tạo: 07/11/2021</p>
                                            <p>Người tạo: Nguyễn Lê Thanh Phong</p>
                                        </div>
                                        <div className="text-sm flex">
                                            <div className="p-1">
                                                <p className="mb-2 font-semibold">Ngày bắt đầu</p>
                                                <span className="rounded bg-blue-100 text-blue-400 p-1">01/03/2021</span>
                                            </div>
                                            <div className="p-1">
                                                <p className="mb-2 font-semibold">Ngày kết thúc</p>
                                                <span className="rounded bg-pink-100 text-pink-400 p-1">16/12/2021</span>
                                            </div>
                                            <div className="p-1">
                                                <p className="mb-2 font-semibold">Tình trạng</p>
                                                <span className="rounded bg-blue-200 text-blue-500 p-1">Bình thường</span>
                                            </div>
                                        </div>
                                        <p className="text-sm mt-4 text-gray-400">
                                            Tổng hợp lúc 12:00 ngày 08/11/2021
                                        </p>

                                    </div>
                                    <div className="w-1/3">
                                        <div className="flex items-center">
                                            <div className="p-3">
                                                <Progress type="circle" percent={0} trailColor='#cccccc' width='100px' />
                                            </div>
                                            <div className="">
                                                <p className="">Tiến độ kế hoạch</p>
                                                <Progress percent={0} trailColor='#cccccc' />
                                                <p>Tiến độ thực tế</p>
                                                <Progress percent={0} trailColor='#cccccc' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-3 w-1/3">
                                        <div className="relative bg-blue-600">
                                            <div className="absolute -top-5 right-0">
                                                <Dropdown overlay={p_menu} placement="bottomRight">
                                                    <a className="ant-dropdown-link p-1" onClick={e => e.preventDefault()}>
                                                        <EllipsisOutlined className="text-xl" />
                                                    </a>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="block mx-auto mr-4 mt-4">
                                            <img src="../../images/vulq/da-20-800x450.jpg" className="w-full h-auto" alt="logo image" />
                                        </div>
                                    </div>
                                </div>
                                <Divider className="mt-3 mb-2" />
                                <div className="flex">
                                    <div className="flex-1 flex">
                                        <UsergroupAddOutlined className="text-3xl text-gray-400" />
                                        <div className="mt-3 ml-2">
                                            <Avatar.Group size="small">
                                                <Avatar src="https://joeschmoe.io/api/v1/random" />
                                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                                <Tooltip title="Ant User" placement="top">
                                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                                </Tooltip>
                                                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined />} />
                                            </Avatar.Group>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex">
                                        <FileTextOutlined className="text-3xl text-gray-400" />
                                        <div className="ml-2">
                                            <p className="font-semibold">Công việc</p>
                                            <p className="font-bold">24</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex">
                                        <BankOutlined className="text-3xl text-gray-400" />
                                        <div className="ml-2">
                                            <p className="font-semibold">Ngân sách</p>
                                            <p className="font-bold">14.000.000.000</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex">
                                        <MoneyCollectOutlined className="text-3xl text-gray-400" />
                                        <div className="ml-2">
                                            <p className="font-semibold">Thu</p>
                                            <p className="font-bold">0</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex">
                                        <TransactionOutlined className="text-3xl text-gray-400" />
                                        <div className="ml-2">
                                            <p className="font-semibold">Chi</p>
                                            <p className="font-bold">0</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    reverseArrow="true"
                    width="100"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
                        className="mt-2"
                    >
                        <Menu.Item key="1" icon={<QuestionOutlined />} >
                        </Menu.Item>
                        <Menu.Item key="2" icon={<BellOutlined />} >
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MessageOutlined />} >
                        </Menu.Item>

                    </Menu>
                </Sider>
            </Layout>
        </div>
    )
}

export default Dashboard;