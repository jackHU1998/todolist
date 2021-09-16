// 这四个全部都是ts的类型
import { Effect, Reducer} from 'umi';

export interface ListItemType {
  id: number;
  title: string;
}

export interface IndexModelState {
  list: Array<ListItemType>;
  list1: Array<ListItemType>;
}

export interface IndexModelType {
  // 如果一个字符串是一个确定的， 不会改的，那么可以直接写成这个字符串的值
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    addItem: Reducer;
    removeItem: Reducer;
    remove1Item: Reducer;
    updateItem: Reducer;
    finishItem:Reducer;
    unfinishItem:Reducer;
  };
 
}

const IndexModel: IndexModelType = {
  // 命名空间
  namespace: 'index',
  // 全局的状态
  state: {
    list: [],
    list1:[]
  },

  
  // 同步方法
  reducers: {
    addItem(state, action) {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    },
    removeItem(state, action) {
      return {
        ...state,
        list: state.list.filter((item: ListItemType) => item.id !== action.id),
      };
    },
    remove1Item(state, action) {
      return {
        ...state,
        list1: state.list1.filter((item: ListItemType) => item.id !== action.id),
      };
    },
    updateItem(state, action) {
      console.log(action.payload);
      return {
        ...state,
         list: state.list.filter((item: ListItemType) => item.id == action.payload.id?item.title=action.payload.title:item.title),
      };
    },
    finishItem(state, action) {
      return {
        ...state,
        list: state.list.filter((item: ListItemType) => item.id !== action.payload.id),
        list1: [...state.list1, action.payload],
      };
    },
    unfinishItem(state, action) {
      return {
        ...state,
        list1: state.list1.filter((item: ListItemType) => item.id !== action.payload.id),
        list: [...state.list, action.payload],
      };
    },
  },

};

export default IndexModel;
