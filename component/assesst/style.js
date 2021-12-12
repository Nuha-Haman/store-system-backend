import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  

link: {
 fontSize:'15px',
 color:'#9e9e9e', 
 margin:'64px auto',

  "&:hover": {
      textDecoration:'underline',
      cursor:'pointer',
  },
},

  
}));