import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { typeSomethingAC } from "../../index";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#3f51b5"
  }
}));

function Comment(props) {
  const classes = useStyles();
  let [inputValueName, setInputValueName] = React.useState(0);
  const handleChangeName = e => {
    setInputValueName((inputValueName = e.target.value));
  };
  const handleClick = () => {
    props.typeSomething(inputValueName);
  };
  return (
    <div style={{ paddingTop: 100 }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Type something"
              onChange={handleChangeName}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
export default connect(
  null,
  dispatch =>
    bindActionCreators(
      {
        typeSomething: typeSomethingAC
      },
      dispatch
    )
)(Comment);
