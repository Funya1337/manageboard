import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { setUsernameAC } from '../../index';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/admin">
        This website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#3f51b5"
  },
}));

function LoginPage(props) {
  const classes = useStyles();
  let [inputValueName, setInputValueName] = React.useState(0);
  let [inputValueSurname, setInputValueSurname] = React.useState(0);
  const handleChangeName = (e) => {
    setInputValueName(inputValueName = e.target.value);
  }
  const handleChangeSurname = (e) => {
    setInputValueSurname(inputValueSurname = e.target.value);
  }
  const handleClick = () => {
    props.setUsername(inputValueName, inputValueSurname);
  }
  return (
    <div style={{ paddingTop: 100 }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Fill the fields
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Your name"
              name="name"
              onChange={handleChangeName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="surname"
              label="Your surname"
              id="surname"
              onChange={handleChangeSurname}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Save
          </Button>
          </form>
        </div>
        <Box mt={2}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
export default connect(
  null,
  dispatch => bindActionCreators({
    setUsername: setUsernameAC,
  }, dispatch)
)(LoginPage);