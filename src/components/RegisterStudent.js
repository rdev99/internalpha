import '../styles/RegisterStudent.css';
import {Avatar, Button, CssBaseline, TextField, Grid, Box, Paper, Typography, Container} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
  
  const theme = createTheme();

  
  function RegisterStudent() {

    const [page,setPage] = useState(1);
    const [formData,setFormData] = useState({
      fname:"",
      lname:"",
      email_adress:"",
      address:"",
      city:"",
      dob:"",
      phone_number:"",
      password:"",
      repassword:"",
      institute_name:"",
      institute_website:"",
      college_email:"",
      college_city:"",
      college_state:"",
      major:""
    });
    
    const [errmsg,setErrmsg]=useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
    };

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
            <Box component="form" id='1' noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    onChange={(e) => setFormData({...formData,fname:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,lname:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,email_adress:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,address:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,city:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,dob:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,phone_number:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,password:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,repassword:e.target.value})}
                  />
                </Grid>
                
              </Grid>
              
            </Box>
            <Typography className='academic' component="h1" variant="h5">
              Academic Details
            </Typography>
            <Box component="form" id='2' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="institute_name"
                    label="Institute Name"
                    id="institute_name"
                    autoComplete="institute_name"
                    onChange={(e) => setFormData({...formData,institute_name:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,institute_website:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,college_email:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,college_city:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,college_state:e.target.value})}
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
                    onChange={(e) => setFormData({...formData,major:e.target.value})}
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
                Submit
              </Button>
              
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

export default RegisterStudent;