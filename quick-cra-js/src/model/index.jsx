import React, { createContext, useContext } from 'react';
import { useObservableGlobalStore } from './store';

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const globalStore = useObservableGlobalStore();

  return (
    <StoreContext.Provider value={globalStore}>{children}</StoreContext.Provider>
  );
};

/**
 * 全局状态
 *
 * @returns {import('./type').Store}
 */
export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('未完成初始化 store！');
  }
  return store;
};
