import { FC, useState, ChangeEvent, KeyboardEvent } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'umi';

const Form: FC = () => {
  const [value, set_value] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    set_value(e.target.value);
  };

  const handleKeyUp = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' && value) {
      dispatch({
        type: 'index/addItem',
        payload: {
          id: new Date().getTime(),
          title: value,
        },
      });
      set_value("")
    }
  };

  return (
    <>
      <Input
        placeholder="Basic usage"
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </>
  );
};

export default Form;
