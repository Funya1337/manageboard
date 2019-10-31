import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import styles from './style';

function AppMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { classes } = props;
  const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const routeChange = (e) => {
    history.push("/admin");
    e.stopPropagation();
  }
  return (
    <div className={ classes.container }>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Main</MenuItem>
        <MenuItem onClick={handleClose, routeChange}>Admin</MenuItem>
        <MenuItem onClick={handleClose}>User</MenuItem>
      </Menu>
    </div>
  );
}
export default withStyles(styles)(AppMenu);