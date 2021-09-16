import { FC } from 'react';
import { useSelector, useDispatch } from 'umi';
import { List as AntdList } from 'antd';

import { ListItemType } from '../model';

interface PropType {
  count: string;
}


const List: FC<PropType> = (props) => {
  // 通过useSelector获取dva里面state的内容
  const list = useSelector((state: any) => state.index.list);
  const list1 = useSelector((state: any) => state.index.list1);
  const dispatch = useDispatch();

  const update = (id: number)=>{
    const code = prompt('请输入修改的值：');
    if(code!='')
    {
      dispatch({
        type: 'index/updateItem',
        payload:{
          id: id,
          title:code
        }
      });
    }
  }
  const remove = (id: number) => {
    dispatch({
      type: 'index/removeItem',
      id: id,
    });
  };
  const remove1 = (id: number) => {
    dispatch({
      type: 'index/remove1Item',
      id: id,
    });
  };

  const finish = (item: object) => {
    dispatch({
      type: 'index/finishItem',
      payload: item,
    });
  };
  const unfinish = (item: object) => {
    dispatch({
      type: 'index/unfinishItem',
      payload: item,
    });
  };
  return (
    <div>
     <p>正在进行</p>
      <AntdList
        bordered
        dataSource={list}
        renderItem={(item: ListItemType) => (
          <AntdList.Item >
            {item.title}
            <button onClick={()=>update(item.id)}>修改</button>
            {/* <button onClick={handleUpdate(item.id)}>修改</button> */}
            <button onClick={() => remove(item.id)}>删除</button>
            <button onClick={()=>finish(item)}>完成</button>
          </AntdList.Item>
        )}
      />
       <p>已经完成</p>
       <AntdList
        bordered
        dataSource={list1}
        renderItem={(item: ListItemType) => (
          <AntdList.Item >
            {item.title}
            <button onClick={() => remove1(item.id)}>删除</button>
            <button onClick={()=>unfinish(item)}>未完成</button>
          </AntdList.Item>
        )}
      />
    </div>
  );
};

export default List;
