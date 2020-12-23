import Home from '@/pages/Home';
import User from '@/pages/User';
import { observer } from 'mobx-react-lite';
import React, { createContext, useContext, useEffect } from 'react';
import { useObservableRouterStore } from './router';

export const RouterContext = createContext(null);

export const RoutesProvider = ({ children }) => {
  const routes = useObservableRouterStore();

  return <RouterContext.Provider value={routes}>{children}</RouterContext.Provider>;
};

/**
 * 路由
 *
 * @returns {import('./type').Routes}
 */
export const useRoutes = () => {
  const store = useContext(RouterContext);
  if (!store) {
    throw new Error('未完成初始化 store！');
  }
  return store;
};

export const RouterInner = observer(() => {
  const { current, init } = useRoutes();
  useEffect(() => {
    init();
  }, [init]);

  switch (current) {
    case '/user':
      return <User />;
    default:
      return <Home />;
  }
});

export default function Router() {
  return <RoutesProvider><RouterInner /></RoutesProvider>;
}
