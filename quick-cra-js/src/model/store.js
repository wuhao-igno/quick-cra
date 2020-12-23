import { useLocalObservable } from 'mobx-react-lite';

export const useObservableGlobalStore = () => {
  const store = useLocalObservable(() => ({
    currentMonth: '',
    tableData: [],
    monthList: [],
    /**
     * 设置当前月份
     * @param {string} month 当前月份
     */
    async setCurrentMonth(month) {
      store.currentMonth = month;
    },
  }));
  return store;
};
