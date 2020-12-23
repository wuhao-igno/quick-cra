import React from "react";
import Layout from "@/components/Layout";
import "./App.css";
import { StoreProvider } from "@/model";
import Init from "@/components/Init";
import Router from "@/routes";

function App() {

  return (
    <StoreProvider>
      <Init>
        <Layout>
          <Router />
        </Layout>
      </Init>
    </StoreProvider>
  );
}

export default App;
