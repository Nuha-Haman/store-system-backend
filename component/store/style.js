import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  
  termsLabel: {
    fontWeight:600,
    "&:hover": {
        textDecoration:'underline',
        cursor:'pointer'
    },
},

link: {
  fontWeight:600,
  "&:hover": {
      textDecoration:'underline',
      cursor:'pointer'
  },
},

  
}));