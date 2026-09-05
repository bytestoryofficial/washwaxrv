/* eslint-disable react-hooks/exhaustive-deps */
import { isEmptyObj, validateEmail } from 'helpers/checker';
import { useEffect, useState } from 'react';

const useForm = (state) => {
  const [fields, setFields] = useState(state);
  const [errors, setErrors] = useState({});
  const [hasError, setHasError] = useState(false);

  const handleFields = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [name]: value });

    if (!value.trim()) setErrors({ [name]: 'This field is required' });
    else {
      const oldState = { ...errors };
      delete oldState[name];
      setErrors(oldState);
    }
  };

  const handleNumberFields = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [name]: value });

    if (value.match(/^[0-9]+$/) != null) {
      const oldState = { ...errors };
      delete oldState[name];
      setErrors(oldState);
    } else if (!value.trim()) {
      setErrors({ [name]: 'This field is required' });
    } else {
      setErrors({ ...errors, [name]: 'Invalid number format' });
    }
  };

  const handleEmailFields = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [name]: value });

    if (validateEmail(value)) {
      const oldState = { ...errors };
      delete oldState[name];
      setErrors(oldState);
    } else if (!value.trim()) {
      setErrors({ [name]: 'This field is required' });
    } else {
      setErrors({ ...errors, [name]: 'Invalid email format' });
    }
  };

  const requireValidate = (obj) => {
    let localError = {};
    for (const prop in obj) {
      if (obj[prop] === null) {
        localError[prop] = 'This field is required';
        setHasError(true);
      } else {
        delete localError[prop];
        setHasError(false);
      }
    }

    setErrors(localError);
    return isEmptyObj(localError);
  };

  const resetValidator = () => {
    setErrors({});
    setHasError(false);
  };

  useEffect(() => {
    if (isEmptyObj(errors)) setHasError(false);
    else setHasError(true);
  }, [errors]);

  return {
    fields,
    handleFields,
    setFields,
    handleNumberFields,
    errors,
    hasError,
    requireValidate,
    handleEmailFields,
    resetValidator,
  };
};

export default useForm;
