import React from 'react';
import { Layout } from 'antd';
import './App.css';


import { Sidebar } from './components'


const App = () => {


  return (
    <div>
      <Layout style={{ height: "100vh", overflow: "auto" }}>
        <Sidebar />
      </Layout>
    </div>
  );
}

export default App
