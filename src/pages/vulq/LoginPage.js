import { Form, Input, Button, Checkbox, Menu, Dropdown, message, Space, Tooltip, InputNumber, Select } from 'antd';
import { UserOutlined, LockOutlined, DownOutlined } from '@ant-design/icons';


const LoginPage = () => {


  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  const language_menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Tiếng Việt
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        English
      </Menu.Item>
    </Menu>
  );

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const { Option } = Select;

  const [form] = Form.useForm();

  return (
    <div className="flex">
      
      <div className="w-2/5 bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500">
        <div className="block mx-auto my-3 w-1/2">
          <img src="../../images/vulq/vintage-kancilan-farmers-market-logo-vector.webp" className="w-full h-auto" alt="logo image" />
        </div>
        
        <div className="px-12">
          <h1 className="text-lg font-semibold text-center mt-2 mb-8">ĐĂNG NHẬP HỆ THỐNG</h1>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish} 
          >
            <Form.Item
              name={['user', 'database']}
              label="Cơ Sở Dữ Liệu"
              // rules={[{ required: true }]}
            >
              <Select
                placeholder="(Chọn Dữ Liệu)"
                allowClear
              >
                <Option value="male">CSDL A</Option>
                <Option value="female">CSDL B</Option>
              </Select>
            </Form.Item>

            <Form.Item name={['user', 'account']} label="Tài Khoản">
              <Input placeholder="(Email / Phone number)" />
            </Form.Item>

            <Form.Item
              name={['user', 'password']}
              label="Mật Khẩu"
              // rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}
              className="mb-0"
            >
              <Checkbox>Nhớ tài khoản</Checkbox>
            </Form.Item>
            <div className="grid justify-items-end">
              <a className="login-form-forgot" href="">
                Quên mật khẩu?
              </a>
            </div>
            

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
        
        
      </div>
      <div className="w-3/5 bg-right_login bg-cover bg-no-repeat bg-center">
        <div className="h-full flex flex-col justify-end justify-items-end">
          <p className="text-6xl text-white text-right mr-20 mb-2">SLOGAN</p>
          <p className="text-4xl text-white text-right mr-20 mb-28">Sub Text</p>
          <div className="grid justify-items-end mb-5">
            <Dropdown overlay={language_menu} className="mr-5">
              <Button size={'large'}>
                Tiếng Việt <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default LoginPage;