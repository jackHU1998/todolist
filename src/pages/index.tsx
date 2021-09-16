import { FC } from 'react';

import './style.less';

import List from './components/List';
import Form from './components/Form';

const Todolist: FC = () => {
  return (
    <div className="wrap">
      <h3>todolist</h3>
      <Form />
      <List />
    </div>
  );
};

export default Todolist;
