import { useLocalObservable } from 'mobx-react-lite';

export const useObservableRouterStore = () => {
  const routes = useLocalObservable(() => ({
    current: '',
    stack: [],
    init() {
      const initPath = document.location.pathname;
      routes.current = initPath;
      window.onpopstate = () => {
        const path = document.location.pathname;
        const { stack } = routes;
        if (stack[stack.length - 1] === path) {
          stack.pop();
        } else {
          stack.push(path);
        }
      };
    },
    go(route) {
      window.history.pushState(null, '', route);
      routes.stack.push(route);
      routes.current = route;
    },
    back() {
      window.history.back();
    },
  }));
  return routes;
};
