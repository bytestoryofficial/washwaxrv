import { useState } from 'react';

const useDatePicker = (defaultState) => {
  const [value, setValue] = useState(defaultState || null);

  const onDateChange = (newValue) => {
    setValue(newValue);
  };
  return { value, setValue, onDateChange };
};

export default useDatePicker;
