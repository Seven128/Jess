import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useFetch } from '@common/hooks';
import { TestAPI } from '@constanst';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

export default function Login() {
    const { data } = useSelector(state => state.premission, shallowEqual);
    const dispatch = useDispatch();
    const [loginFetchState, makeLoginRequest, resetLoginFetch] = useFetch({
        url: TestAPI.Login,
        method: 'post'
    });
    useEffect(() => {
        // makeLoginRequest({
        // })
        dispatch({
            type: 'permission/fetchSuccess',
            payload: {b:1}
        });
    }, [])


    const onFinish = (values) => {
        makeLoginRequest({
            data: values
        })
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    function handleSubmit(value) {
        console.log(value)
    }
      
    return (
    <Form
        {...layout}
        name="basic"
        initialValues={{
        remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <Form.Item
        label="账号"
        name="account"
        rules={[
            {
            required: true,
            message: '请输入用户名!',
            },
        ]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="密码"
        name="password"
        rules={[
            {
            required: true,
            message: '请输入密码!',
            },
        ]}
        >
        <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
    </Form>
    );
}
