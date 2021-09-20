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
    color:'inherit',
    display:'block',
    filter:'none',
    fontFamily:'Playball, cursive'
},

homecontent:{
    position:'absolute',
    marginTop:'300px',
    width:'100%',
    color:'#efeeea',
    background:'rgba(0,0,0,0.5)',
    boxShadow: '-1px 10px 40px 0px rgba(0,0,0,1)',
    fontFamily:'Spartan, sans-serif'


}








}))