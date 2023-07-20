import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

function FormThree() {
  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data) => console.log(data)

  const handleValidate = (value) => {
    if (value.length<8) {
      return 'must have 8 chars'
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
          {...register('password', {required: 'required', validate: handleValidate})}
        /><br></br>
        {errors?.password && errors.password.message}
        <Button variant="contained" type="submit">submit</Button>
      </form>
    </div>
  )
}

export default FormThree;