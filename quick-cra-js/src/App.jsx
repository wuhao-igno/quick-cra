import React from "react";
import Layout from "@/components/Layout";
import "./App.css";
import { StoreProvider } from "@/model";
import Init from "@/components/Init";
import Router from "@/routes";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");

function App() {

  return (
    <StoreProvider>
      <Init>
        <ConfigProvider locale={zhCN}>
          <Layout>
            <Router />
          </Layout>
        </ConfigProvider>
      </Init>
    </StoreProvider>
  );
}

export default App;
