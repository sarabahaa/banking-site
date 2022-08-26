

import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from "./Register.module.css"
import { useNavigate } from "react-router-dom";
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material'; 
import { FormControlLabel } from '@material-ui/core';
import { Radio }from '@mui/material';
import {sendRegisterInfo} from "../APIS/User"
import { Snackbar } from '@mui/material';
import SnackbarContent from '@mui/material/SnackbarContent';
import back from '../assets/back.jpeg';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack'; 
//import { RadioGroup } from 'formik-material-ui';
import Paper from '@mui/material/Paper';



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
 
  



const validationSchema = yup.object({
 email: yup
    .string('Enter the email')
    .email('Enter a valid email')
    .required('Email is required'),
password: yup
    .string('Enter the password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
accountNumber: yup
   .number().test('len', 'Must be between 8 to 12 numbers',(val) => { if(val) return (val.toString().length >= 8 &&  val.toString().length <= 12 )  })
    .required('account Number is required'),


balance: yup
    .number('Enter the balance')
    .required('balance type is required'),

accountType: yup
    .string('')
    .required('accountType type is required'),







});

//const Dummy = [{name:'sara',role:'admin'},{name:'menna', role:'user'}]
const Register = () => {
     
        const [open, setOpen] = React.useState(false);
      
        const handleClick = () => {
            
          setOpen(true);
        };
      
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };

    const navigate = useNavigate();
  const formik = useFormik(
    {
    initialValues: {
      email: '',
      password: '',
      accountNumber:'',
      balance:'',
      accountType:'',
      

      
      

    },
    validationSchema: validationSchema,
    onSubmit: (values,{ resetForm }) => {
        resetForm();

        //call backend 
        console.log(values)
        let toBeSent = {Register:values}
        console.log(toBeSent)
      alert(JSON.stringify(values, null, 2));
      sendRegisterInfo(values).then(()=>setOpen(true))
       
      .catch((err)=>console.log('error',err));
      
    },
  });

  return (

    

    
        
        <Paper className={styles['Register-form']}elevation={2} >
        <div>
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
        
        <TextField
          fullWidth
          id="accountNumber"
          name="accountNumber"
          label="Account Number"
          value={formik.values.accountNumber}
          onChange={formik.handleChange}
          error={formik.touched.accountNumber && Boolean(formik.errors.accountNumber)}
          helperText={formik.touched.accountNumber && formik.errors.accountNumber}
        />
        <TextField
          fullWidth
          id="balance"
          name="balance"
          label="Balance"
          value={formik.values.balance}
          onChange={formik.handleChange}
          error={formik.touched.balance && Boolean(formik.errors.balance)}
          helperText={formik.touched.balance && formik.errors.balance}
        />
        <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Account Type</FormLabel>
        <form onSubmit={formik.handleSubmit}>
      <RadioGroup
                id="accountType"

          aria-labelledby="demo-controlled-radio-buttons-group"
         name="accountType"
        value={formik.values.accountType}
        onChange={formik.handleChange}>
            
        <FormControlLabel value="Debit " control={<Radio />} label="Debit" />
        <FormControlLabel value="Credit" control={<Radio />} label="Credit" />
         </RadioGroup>
        
          <Stack spacing={2} sx={{ width: '100%' }}>



        <Button color="primary" variant="contained" fullWidth type="submit"  onClick={handleClick}  >
          Submit
        </Button>
           <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                         account added successfully!
            </Alert>
        </Snackbar>
        </Stack>
      </form>
      
      </FormControl>
    
    </div>
    </Paper>
    
  );
};

export default Register;
