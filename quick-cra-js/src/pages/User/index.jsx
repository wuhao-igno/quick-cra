import { useStore } from '@/model';
import { observer } from 'mobx-react-lite';
import React from 'react';

const Home = () => {
  const { tableData } = useStore();
  return <div style={{ backgroundColor: '#fff' }}>{JSON.stringify(tableData)}</div>;
};

export default observer(Home);
