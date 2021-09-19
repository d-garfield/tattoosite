import { makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(8)
    },
    media: {
        height:'300px',
        backgroundSize:'auto',
        
    },
  
    AA:{
        transition:'filter 0.2s',
        
        '&:hover': {
            filter:'blur(1px) brightness(0.5)',
            boxShadow: '-1px 10px 120px 0px rgba(0,0,0,0.8)',
          },
          '&:hover + artistinfo':{
            display:'block',
            color:'red',
        }
    },

    artistname:{
      color:'#efeeea',
      position: 'absolute',
      alignText:'center',
      bottom: '0',
      left: '0',
      width: '100%',
      padding: '10px',
      backgroundColor:'rgba(0, 0, 0, 0.5)',
      backgroundAttachment: 'scroll',
    },

    artistinfo:{
    },

    card:{
      position: 'relative',
      overflow: 'hidden',
      fliter:'blur (20px)',
    },

    cardbottom:{
      backgroundColor:'rgba(0, 0, 0, 0.5)',
    },
    emailicon:{
      color:'darkslategray',
      '&:hover': {
        color:'#a88e6d',
        boxShadow: '-1px 10px 120px 0px rgba(0,0,0,0.8)',
      }

    },
    instaicon:{
      color:'darkslategray',
      '&:hover': {
        boxShadow: '-1px 10px 120px 0px rgba(0,0,0,0.8)',
        color:'#a88e6d'
      }
    }

  }));