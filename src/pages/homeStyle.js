import { makeStyles} from '@material-ui/core/styles';
import logo from '../assets/tattooshop.jpg'
export default makeStyles((theme) => ({

home:{
    background: `url(${logo})`, 
    backgroundSize: 'cover', 
    backgroundRepeat:'no-repeat', 
    height: 800,
    marginTop:'0',
    filter:'blur(8px)',
    [theme.breakpoints.down('xs')]: {
        fliter:'none',
      },
    
    }
,

homecontent:{
    filter:'none',
},
h1:{
    marginTop:'0',
},
subtitle:{
    color:'inherit',
    display:'block',
    filter:'none',
}








}))