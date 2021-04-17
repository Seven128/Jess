import React, { useEffect } from 'react';
import { Form, Input, Button, Toast, message } from 'antd';
import { useFetch } from '@common/hooks';
import { TestAPI, FetchState } from '@constanst';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

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
    const history = useHistory();
    const [loginFetchState, makeLoginRequest, resetLoginFetch] = useFetch({
        name: 'premission',
        url: TestAPI.Login,
        method: 'post'
    });
    useEffect(() => {
        history.push('/')
        dispatch({
            type: 'permission/fetchSuccess',
            payload: {b:1}
        });
    }, [])

    useEffect(() => {
        if(loginFetchState.fetchState === FetchState.Success) {
            dispatch('/confirmInfo');
            message.success('登录成功！', 1.5);

        }
        if(loginFetchState.fetchState === FetchState.Failure) {
            message.success('登录失败！', 1.5);
        }
    }, [loginFetchState])


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
        <Button type="primary" htmlType="submit" loading={loginFetchState === FetchState.Loading}>
            Submit
        </Button>
        </Form.Item>
    </Form>
    );
}
