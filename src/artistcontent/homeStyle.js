import { makeStyles} from '@material-ui/core/styles';
import logo from '../assets/tattooshop.jpg'
export default makeStyles((theme) => ({

home:{
   position:'relative',
   height: 900,
   width:'100%',
    }
,

homeimage:{
    background: `url(${logo})`, 
    backgroundSize: 'cover', 
    backgroundRepeat:'no-repeat', 
    backgroundAttachment: 'fixed',
    height: 900,
    width:'100%',
    position:'absolute',
    marginTop:'0',
    filter:'brightness(0.4)',
    
},
artistimage:{
    background: `url(${logo})`, 
    backgroundSize: 'cover', 
    backgroundRepeat:'no-repeat', 
    backgroundAttachment: 'fixed',
    height: 1350,
    width:'100%',
    position:'absolute',
    filter:'brightness(0.1)',
    [theme.breakpoints.down('md')]: {
        height: 1550,
      },
    [theme.breakpoints.down('xs')]: {
        height: 2700,
      },
      
    
},
h1:{
    marginTop:'0',
},
subtitle:{
    color:'#efeeea',
    display:'block',
    fontFamily:'Playball, cursive',
    marginBottom:'10px',
    paddingTop:'10px',
    filter: 'drop-shadow(1px 2px 1px black)',
    cursor:'default',
},

altsub:{
    color:'#efeeea',
    display:'block',
    fontFamily:'Playball, cursive',
    marginBottom:'10px',
    paddingTop:'80px',
    cursor:'default',
    filter: 'drop-shadow(1px 2px 1px black)'
},

underhead:{
    color:'#efeeea',
    display:'block',
    fontFamily:'Spartan, sans-serif',
    marginBottom:'10px',
    paddingTop:'20px',
    cursor:'default',
    paddingBottom:'30px',
    filter: 'drop-shadow(1px 2px 1px black)'
},

divider:{
    width:'50%',
    color:'#efeeea',
    position:'absolute',
    marginLeft:'24.5%',
    cursor:'default',
},

homecontent:{
    position:'absolute',
    marginTop:'275px',
    width:'70%',
    margin:'15%',
    padding:'10px',
    cursor:'default',
    color:'#efeeea',
    background:'rgba(0,0,0,0.5)',
    boxShadow: '-1px 10px 40px 0px rgba(0,0,0,1)',
    fontFamily:'Spartan, sans-serif',
    [theme.breakpoints.down('xs')]: {
        marginTop:'90px'
      },


},
contact:{
   position:'relative',
   marginTop:'300px',
   [theme.breakpoints.down('md')]: {
    marginTop:'550px',
  },


}








}))