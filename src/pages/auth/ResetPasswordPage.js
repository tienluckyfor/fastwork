import {Form, Input, Button, Modal, notification} from "antd";
import {CheckCircleOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {authResetPassword, authsSelector} from "./authsSlice";
import {useNavigate} from "react-router-dom";
import {AuthLayout} from "./AuthLayout";
import {useEffect} from "react";
import {fnCodeby} from "react-api-codeby";

const ResetPasswordPage = () => {
    const dispatch = useDispatch()
    const {reAuth} = useSelector(authsSelector)
    const {ref, email, token} = fnCodeby.getURLParams()
    const navigate = useNavigate();

    useEffect(() => {
        if (!reAuth?.data) return;
        if (reAuth?.data?.status === 'PASSWORD_CHANGED') {
            Modal.confirm({
                title: 'Success',
                icon: <CheckCircleOutlined/>,
                content: reAuth?.data?.message,
                cancelButtonProps: {style: {display: 'none'}},
                onOk() {
                    const url = fnCodeby.objToUrlParams({ref})
                    navigate(`/LoginPage?${url}`)
                },
            });
            return;
        }
        notification.error({message:reAuth?.data?.message})
    }, [reAuth])

    const [form] = Form.useForm()
    form.setFieldsValue({
        email,
        token,
    })
    return (
        <AuthLayout
            onBack={() => navigate(-1)}
            title="Reset Password"
        >
            <Form
                form={form}
                onFinish={(values) => dispatch(authResetPassword({...values, ref}))}
                layout={`vertical`}
            >
                {!token &&
                <Form.Item
                    label="Code"
                    name="code"
                    rules={[{required: true,}]}
                >
                    <Input/>
                </Form.Item>
                }

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password.'}]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="password_confirmation"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Button
                    block
                    type="primary"
                    htmlType="submit"
                    loading={reAuth.isLoading}
                >Submit</Button>
                <Form.Item hidden={true} name="email"/>
                <Form.Item hidden={true} name="token"/>
            </Form>
        </AuthLayout>
    )
}
export default ResetPasswordPage