
import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {sendLoginInfo} from "../APIS/User"
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import styles from "./login.module.css";

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Dummy = [{name:'sara',role:'admin'},{name:'menna', role:'user'}]
const Login = () => {
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        //call backend 
        console.log(values)
        let toBeSent = {logedIn:values}
        console.log(toBeSent)
      alert(JSON.stringify(values, null, 2));

      sendLoginInfo(values).then((data)=>{
        if (data.isSuccessfull){
            navigate('/register')
        }
        else{
            navigate('/profile')
        }
      }).catch((err)=>console.log('error',err));
      if (Dummy[1].role==='admin'){
        navigate('/register')
    }
    else{
        navigate('/profile')
    }

    },
  });

  return (
    <Paper className={styles['login-form']}elevation={2} >
        <div>
      <form onSubmit={formik.handleSubmit}>
        
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
        </form>
            
            </div>
            
            </Paper>
  );
};

export default Login;