import {Box, Button, Grid, TextField, Typography } from '@mui/material';
import './App.css'
import React, { useState } from "react";
import axiosApi from "./axiosApi.ts";

const abc = "abcdefghijklmnopqrstuvwxyz";

const App = () => {
  const [textMutation, setTextMutation] = useState<string>('');
  const [curretLink, setCurretLink] = useState<string>('');

  const onChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {value} = event.target
    setTextMutation(value)
  }


  const onSubmit = async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    let rs = "";
    while (rs.length < 7) {
      let randomCase = Math.floor(Math.random() * 2)
      let letter = abc[Math.floor(Math.random() * abc.length)]
      rs += randomCase ? letter.toUpperCase() : letter.toLocaleLowerCase();
    }
    const linkToSubmit = {
      shortenUrl: rs,
      originalUrl: textMutation
    }
    await axiosApi.post("/links",  linkToSubmit);

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
