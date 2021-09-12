import { makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(8)
    },
    media: {
        height:'220px',
    },
  
    AA:{
        backgroundColor:'red',
        transition:'filter 0.2s',
        '&:hover': {
            filter:'blur(2px) grayscale(100%)',
          },
    }
  }));