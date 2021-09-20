import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
        list: {
          width: 200,
        },
        fullList: {
          width: 'auto',
        },
        drawer:{
          [theme.breakpoints.up('sm')]: {
            display:'none',
          },
        },
        listItem:{
            fontSize:'30px',
            fontFamily:'Spartan, sans-serif',
        }
      }

))