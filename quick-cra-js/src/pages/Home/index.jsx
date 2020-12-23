import { useStore } from "@/model";
import { observer } from "mobx-react-lite";
import React from "react";

const Home = () => {
  const { version } = useStore();
  return <div style={{ backgroundColor: "#fff" }}>{version}</div>;
};

export default observer(Home);
