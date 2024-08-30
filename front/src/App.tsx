import {Box, Button, Grid, TextField, Typography } from '@mui/material';
import './App.css'
import React, { useState } from "react";

const App = () => {
  const [textMutation, setTextMutaion] = useState<string>('')

  const onChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {value} = event.target
    setTextMutaion(value)
  }


  const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log(textMutation);
  }


  return (
    <>
      <Grid
        onSubmit={onSubmit}
        container spacing={2} component="form" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Grid item>
          <Typography component="h4" variant="h4"> Shorten your link</Typography>
        </Grid>
        <Grid
          item>
          <TextField label="link" onChange={onChange} variant="filled" value={textMutation} >
          </TextField>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Shornet
          </Button>
        </Grid>
      </Grid>
      <Box>
        <Typography component="h4" variant="h4">
          Here will be the link
        </Typography>
      </Box>
    </>
  )
};

export default App
