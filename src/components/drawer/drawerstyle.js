import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
        list: {
          width: 150,
        },
        fullList: {
          width: 'auto',
        },
        drawer:{
          [theme.breakpoints.up('sm')]: {
            display:'none',
          },
        }
      }

))