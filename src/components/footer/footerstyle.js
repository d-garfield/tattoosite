import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({

footer:{
    textAlign:'center',
    width:'50%',
    paddingTop:'20px',
    color:'#efeeea',
    display:'block',
    position:'relative',
    [theme.breakpoints.down('xs')]: {
        width:'50%',
      },


},

footerwrapper:{
    height:'230px',
    backgroundColor:'black',
    [theme.breakpoints.down('xs')]: {
        height:'250px',
      },
},

footertext:{
    color:'#efeeea',
    fontSize:'16px',
    marginTop:'10px',
    fontFamily:'Spartan, sans-serif',
},
footericon:{
    color:'#efeeea',
    marginTop:'10px',
    fontSize:'40px',
    fontFamily:'Spartan, sans-serif',
    '&:hover': {
        color:'#a88e6d',
      },
},






}))