import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 300,
    paddingTop: 100,
    margin: "auto"
  },
  pos: {
    marginBottom: 12
  }
});

function Aboutme(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          User data
        </Typography>
        <br />
        <Typography className={classes.pos} color="textSecondary">
          Name: {props.username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Surname: {props.surname}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Comment: {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default connect(state => ({
  username: state.username,
  surname: state.surname,
  text: state.text
}))(Aboutme);
