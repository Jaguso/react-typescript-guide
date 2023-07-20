import React from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';


function FormOne() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = data => {
    console.log(data)
  }
  
  const validatePassword = (value) => {
    console.log('pass', value)
    if (value.length<8) {
      return 'password must have 8 characters'
    }

    if (!/\d/.test(value)) {
      return 'password must have a digit'  
    }

    let nonAlphanumeric = value.match(/\W/g)
    console.log('match', nonAlphanumeric)

    if (nonAlphanumeric === null || nonAlphanumeric.length<2) {
      return 'password must have 2 non alphanumeric chars'
    }

    if (!/[A-Z]/.test(value)) {
      return 'must have an uppercase'
    }
  }

  console.log('errors', errors)
  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          variant="outlined" 
          label="Name" 
          margin="normal"
          {...register("name")}
        /> <br></br>
        <TextField 
          variant="outlined" 
          label="Email" 
          type="email" 
          margin="normal" 
          {...register("email")}
        /> <br></br>
        <TextField 
          variant="outlined" 
          label="Password" 
          type="password" 
          margin="normal" 
          {...register("password", {required: "Password is required"
          , validate: validatePassword
        })}
        /> <br></br>
        {errors?.password && errors.password.message} <br></br>
        <TextField 
          variant="outlined" 
          label="Repeat password" 
          type="password" 
          margin="normal" 
          {...register("repeatPassword")}
        /> <br></br>
        <Button variant="contained" type="submit">test</Button>
      </form>
      <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
      />
    </div>
  )
}

export default FormOne;