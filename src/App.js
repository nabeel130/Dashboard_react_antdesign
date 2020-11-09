import React from 'react';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
      <Header style={{padding:10}}>
      <Avatar style={{float:'right'}} src='./mypic.jpg' />
      <Title style={{color:'white'}} level={3}>KKPL FOOTBALL</Title>
      </Header>
      <Layout>
      <Sider>
        <Menu
        defaultSelectedKeys={['Dashboard']}
        mode="inline"
        >
          <Menu.Item key='Dashboard'>
            DASHBOARD
          </Menu.Item>
          <SubMenu
           title={
            <span>
              <SettingOutlined />
              <span>About us</span>
            </span>
          }
          >
            <Menu.ItemGroup key='Aboutus' title="country1">
              <Menu.Item key='Location1'>Location 1</Menu.Item>
              <Menu.Item key='Location2'>Location 1</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dahboard</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ background: '#fff' , padding: 24, minHeight: 580 }}>
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ayout example Created by NABEELKM</Footer>
      </Layout>
        
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
