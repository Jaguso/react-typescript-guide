import React from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

function FormTwo() {
  
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  } 

  const validatePassword = (value) => {
    if (value.length<8) {
      return '8 chars error'
    }

    if (!/\d/.test(value)) {
      return 'digit required'
    }

    if (!/[A-Z]/.test(value)) {
      return 'an uppercase required'
    }
    let nonAlphanumeric = value.match(/\W/g)
    if (nonAlphanumeric === null || nonAlphanumeric.length<2) {
      return 'two nonalphanumeric chars required'
    }
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="outlined"
          label="password"
          type="password"
          margin="normal"
          {...register('password', {required: 'pass must be provided', validate: validatePassword})}
        /> <br></br>
        {errors?.password && errors.password.message}<br></br>
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default FormTwo;