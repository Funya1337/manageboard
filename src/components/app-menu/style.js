import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  popupClass: {
    backgroundColor: "#3f51b5",
    color: "white",
    '&:hover': {
      backgroundColor: '#3f51b5',
    },
    fontWeight: 500
  }
}));
export default useStyles;