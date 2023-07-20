import React from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

function FormFour() {

  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => console.log(data);

  const handlePassValidation = (value) => {
    if (value.length<8) {
      return 'se requieren 8 caracteres'
    }

    if (!/\d/.test(value)) {
      return 'se requiere un digito'
    }

    let notAlphanumericChars = value.match(/\W/g)
    console.log('notAlphanumericChars', notAlphanumericChars)
    if (notAlphanumericChars === null || notAlphanumericChars.length <2) {
      return 'se requieren dos caracters no alfanumericos'
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="outlined"
          label="name"
          margin="normal"
          {...register('name', { required: 'se requiere el nombre' })}
        /><br></br>
        {errors?.name && errors.name.message}<br></br>
        <TextField
          variant="outlined"
          label="email"
          type="email"
          margin="normal"
          {...register('email')}
        /><br></br>
        <TextField
          variant="outlined"
          label="password"
          type="password"
          margin="normal"
          {...register('password', {validate: handlePassValidation})}
        /><br></br>
        {errors?.password && errors.password.message}
        <Button variant="contained" type="submit">send</Button>
      </form>
    </div>
  )
} 

export default FormFour;