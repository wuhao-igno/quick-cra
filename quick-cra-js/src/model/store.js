import { useLocalObservable } from 'mobx-react-lite';

export const useObservableGlobalStore = () => {
  const store = useLocalObservable(() => ({
    version: '',
  }));
  return store;
};
