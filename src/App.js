import React from 'react';
import { Layout } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">

<Layout>
      <Sider style={{background:"rebeccapurple",color:"aliceblue"}}>Sider</Sider>
      <Layout>
        <Header style={{background:"aqua",color:"aliceblue"}}>Header</Header>
        <Content style={{background:"aliceblue",color:"black"}}>Content</Content>
        <Footer style={{background:"blue",color:"aliceblue"}}>Footer</Footer>
      </Layout>
    </Layout>    </div>
  );
}

export default App;
