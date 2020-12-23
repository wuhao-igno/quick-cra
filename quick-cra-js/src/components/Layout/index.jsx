import React from 'react';
import { Layout } from 'antd';
import PageHeader from '../Header';
import PageFooter from '../Footer';
import PageSider from '../Sider';

const {
  Header, Content, Footer, Sider,
} = Layout;

const PageLayout = ({ children }) => (
  <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
      theme="light"
    >
      <PageSider />
    </Sider>
    <Layout style={{
      marginLeft: 200, height: '100vh', display: 'flex', flexDirection: 'column',
    }}
    >
      <Header style={{ padding: 0, backgroundColor: '#fff' }}>
        <PageHeader />
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial', flex: 1 }}>{children}</Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
        <PageFooter />
      </Footer>
    </Layout>
  </Layout>
);

export default PageLayout;
