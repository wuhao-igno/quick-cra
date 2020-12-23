import { useStore } from '@/model';
import React, { useEffect } from 'react';

const Init = ({ children }) => {
  const { init } = useStore();
  useEffect(() => {
    init();
  }, [init]);

  return (
    <>{children}</>
  );
};

export default Init;
