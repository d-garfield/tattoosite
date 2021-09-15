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
            filter:'blur(1px) grayscale(90%)',
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
    emailicon:{
      color:'darkslategray',
      '&:hover': {
        filter:'invert(100%)',
        boxShadow: '-1px 10px 120px 0px rgba(0,0,0,0.8)',
      }

    },
    instaicon:{
      color:'darkslategray',
      '&:hover': {
        background: '#d6249f',
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
        boxShadow: '-1px 10px 120px 0px rgba(0,0,0,0.8)',
      }
    }

  }));