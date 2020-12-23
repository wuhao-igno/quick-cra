import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import './App.css';
import { get, post } from '@/utils/http';

function App() {
  // 开发模式使用
  useEffect(() => {
    window.httpGet = get;
    window.httpPost = post;
  }, []);

  return (
    <Layout><Home /></Layout>
  );
}

export default App;
