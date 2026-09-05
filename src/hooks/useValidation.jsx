import { useState } from 'react';

function areAllValuesNull(obj) {
  for (let key in obj) {
    if (obj[key] !== null) {
      return false;
    }
  }
  return true;
}

const useValidation = (schema) => {
  const [errors, setErrors] = useState(schema);

  const onValidate = (fields) => {
    const newError = { ...errors };

    console.log('f', fields);

    for (let key in fields) {
      if (!fields[key]) {
        newError[key] = 'This field is required.';
        setErrors(newError);
      } else {
        newError[key] = null;
        setErrors(newError);
      }
    }

    return areAllValuesNull(newError);
  };

  return { errors, setErrors, validate: onValidate };
};

export default useValidation;
