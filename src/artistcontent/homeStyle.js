import { makeStyles} from '@material-ui/core/styles';
import logo from '../assets/tattooshop.jpg'
export default makeStyles((theme) => ({

home:{
   position:'relative',
   height: 800,
   width:'100%',
    }
,

homeimage:{
    background: `url(${logo})`, 
    backgroundSize: 'cover', 
    backgroundRepeat:'no-repeat', 
    backgroundAttachment: 'fixed',
    height: 800,
    width:'100%',
    position:'absolute',
    marginTop:'0',
    filter:'brightness(0.4)',
    
},
h1:{
    marginTop:'0',
},
subtitle:{
    color:'#efeeea',
    display:'block',
    filter:'none',
    fontFamily:'Playball, cursive',
    marginBottom:'10px',
    paddingTop:'10px',
    filter: 'drop-shadow(1px 2px 1px #a88e6d)'
},

altsub:{
    color:'black',
    display:'block',
    filter:'none',
    fontFamily:'Playball, cursive',
    marginBottom:'10px',
    paddingTop:'80px',
    filter: 'drop-shadow(1px 2px 1px #a88e6d)'
},

underhead:{
    color:'black',
    display:'block',
    filter:'none',
    fontFamily:'Spartan, sans-serif',
    marginBottom:'10px',
    paddingTop:'10px',
    filter: 'drop-shadow(1px 2px 1px #a88e6d)'
},

divider:{
    width:'50%'
},

homecontent:{
    position:'absolute',
    marginTop:'275px',
    width:'70%',
    margin:'15%',
    padding:'10px',
    color:'#efeeea',
    background:'rgba(0,0,0,0.5)',
    boxShadow: '-1px 10px 40px 0px rgba(0,0,0,1)',
    fontFamily:'Spartan, sans-serif'


}








}))