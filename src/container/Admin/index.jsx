import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import ScorePage from '@container/ScorePage';

import './style.less';

const { Header, Footer, Content } = Layout;

export default function Admin() {
    return (
			<Layout>
        <Header className="adminHeader">Header</Header>
        <Content className="adminContent">
          <Route path="/admin/scorePage">
            <ScorePage />
          </Route>
        </Content>
        <Footer className="adminFooter">Footer</Footer>
      </Layout>
    )
}
