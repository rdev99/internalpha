import '../styles/RegisterStudent.css';
import {Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
  
  const theme = createTheme();

  
  function RegisterStudent() {

    const [page,setPage] = useState(1);
    const [errmsg,setErrmsg]=useState('');

    const handleNext = (event) => {
      setErrmsg('');
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      let data1={
        email: data.get('email'),
        password: data.get('password'),
        repassword: data.get('repassword'),
        fname: data.get('firstName'),
        lname: data.get('lastName'),
        address: data.get('address'),
        city: data.get('city'),
        dob: data.get('dob'),
        phone: data.get('phone'),
      }
      if(data1.password!==data1.repassword)
      {
        setErrmsg('Passwords Do Not Match')
      }

      console.log(data1);
      // setPage(2);
      setPage((pg) => 2)
      // event.currentTarget.reset();
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      let data1={
        institute_name: data.get('institute_name'),
        institute_website: data.get('institute_website'),
        college_email: data.get('college_email'),
        college_city: data.get('college_city'),
        college_state: data.get('college_state'),
        major: data.get('major')
      }
      // eslint-disable-next-line no-console
      console.log(data1);
      
      setPage(1);
    };

    if(page===1)
    {
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box component="form" noValidate onSubmit={handleNext} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      type="email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      name="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="city"
                      label="City"
                      id="city"
                      autoComplete="City"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="dob"
                      label="Date of Birth"
                      type="date"
                      id="dob"
                      autoComplete="dob"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="phone"
                      label="Phone Number"
                      type="text"
                      id="phone"
                      autoComplete="phone number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="repassword"
                      label="Re-Enter Password"
                      type="password"
                      id="repassword"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <div className="errmsg">{errmsg}</div>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Next
                </Button>
                
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
    }
    else if(page===2)
    {
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Academic Details
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="institute_name"
                      label="Institute Name"
                      id="institute_name"
                      autoComplete="institute_name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="institute_website"
                      label="Institute Website"
                      id="institute_website"
                      autoComplete="institute_website"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="college_email"
                      label="College Email ID"
                      id="college_email"
                      type="email"
                      autoComplete="college_email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="college_city"
                      label="College City"
                      id="college_city"
                      autoComplete="college_city"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="college_state"
                      label="College State"
                      id="college_state"
                      autoComplete="college_state"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="major"
                      label="Major"
                      id="major"
                      autoComplete="major"
                    />
                  </Grid>


                  
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
                
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
    }
  }

export default RegisterStudent;