import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    const auxValues = { ...values, [name]: value };
    setValues(auxValues);
  };

  return [{ values }, handleChange, setValues];
};

export default useForm;
