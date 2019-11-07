import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useStyles from "./style";

export default function AppMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = path => () => {
    setAnchorEl(null);
    history.push(path);
  };
  return (
    <div className={classes.container}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button
            className={classes.popupClass}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose("/")}>Main</MenuItem>
            <MenuItem onClick={handleClose("/aboutuser")}>
              Fill user data
            </MenuItem>
            <MenuItem onClick={handleClose("/comment")}>Leave comment</MenuItem>
            <MenuItem onClick={handleClose("/aboutme")}>About me</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
