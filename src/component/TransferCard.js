import styles from "./TransferCard.module.css";
import Paper from '@mui/material/Paper';
import { margin, Stack } from "@mui/system";
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import {sendTransactionInfo} from "../APIS/User"
import { useNavigate } from "react-router-dom";



const validationSchema = yup.object({
    to: yup
    .number().test('len', 'Must be between 8 to 12 numbers',(val) => { if(val) return (val.toString().length >= 8 &&  val.toString().length <= 12 )  })
    .required('account Number is required'),
    amount: yup
      .number('Enter your password')
      .required('amount is required'),
  });
  //const Dummy = [{name:'sara',role:'admin'},{name:'menna', role:'user'}]

const TransferCard =()=>{
    
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
        to: '',
        amount: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm }) => {
        resetForm();


        //call backend 
        console.log(values)
        let toBeSent = {logedIn:values}
        console.log(toBeSent)
      alert(JSON.stringify(values, null, 2));

      sendTransactionInfo(values).then((data)=>{
       
      }).catch((err)=>console.log('error',err));
     {
        
    }

    },
  });
    
    return(
        <Paper className={styles['Transfer-card-container']}elevation={3} >
        <div>
        
        <form onSubmit={formik.handleSubmit}>
        <Stack direction="row" spacing={1}>
        <TextField
          fullWidth
          id="to"
          name="to"
          label="To"
          value={formik.values.to}
          onChange={formik.handleChange}
          error={formik.touched.to && Boolean(formik.errors.to)}
          helperText={formik.touched.to && formik.errors.to}
        />
        <TextField
          fullWidth
          id="amount"
          name="amount"
          label="Amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" >
          Make Transaction
        </Button>
        </Stack>
      </form>
            
        </div>
        
        </Paper>

    );
};
        
      
export default TransferCard;