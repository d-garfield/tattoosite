import { makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(8),
    },
    media: {
        height:'300px',
        backgroundSize:'auto',
        transition:'filter 0.1s',
        filter:' brightness(0.8)',
        '&:hover': {
          filter:' brightness(1.1)'
        },
        
        
    },

    artistname:{
      color:'#efeeea',
      position: 'absolute',
      alignText:'center',
      bottom: '0',
      left: '0',
      width: '100%',
      padding: '5px',
      fontSize:'28px',
      filter: 'drop-shadow(2px 2px 1px black)',
      background:'rgba(0,0,0,0.1)',
      fontFamily:'Spartan, sans-serif',
      backgroundAttachment: 'scroll',
    },

    artistinfo:{
    color:'black',
    textAlign:'left',
    cursor:'default',
     fontFamily:'Spartan, sans-serif',
    },

    card:{
      position: 'relative',
      overflow: 'hidden',
    },

    cardbottom:{
      backgroundColor:'#efeeea',
      color:'black',
    },
    emailicon:{
      color:'black',
      fontSize:'30px',
      '&:hover': {
        color:'#a88e6d',
        boxShadow: '-1px 10px 120px 0px rgba(0,0,0,0.8)',
      }

    },
    instaicon:{
      color:'black',
      fontSize:'30px',
      '&:hover': {
        boxShadow: '-1px 10px 120px 0px rgba(0,0,0,0.8)',
        color:'#a88e6d'
      }
    }

  }));