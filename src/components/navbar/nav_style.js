
import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor:'black',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  
  title: {
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
    height:'110px',
    [theme.breakpoints.down('xs')]: {
      height:'80px'
    },
  },

  MenuItem:{
    backgroundColor:'red',
    padding:'20px',
  },

  listItem:{
    padding:'40px',
    color:'#efeeea',
    justifyContent: 'right',
    fontFamily:'Playball, cursive',
    fontSize:'30px',
    cursor:'pointer',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
      color:'red',
    },
    '&:hover': {
      color:'#a88e6d',
    },

  },
  menuButton: {
    position: 'relative',
    color:'#efeeea',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      color:'red',
    },
  },
  button:{
    backgroundColor:'red',
    color:'inherit',
    [theme.breakpoints.down('xs')]: {
      display:'none',
    },
    
  },
  
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
