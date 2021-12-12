import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  loginFormContainer: {
    width: 500,
    height: 'fit-content',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    padding:  '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:' center',
    border: '1px solid #e2e2e2',
    borderRadius: '8px',
    },

  avatar: {
    backgroundColor: '#ffffff',
    minHeight: '180px',
    minWidth: '180px' 
  },

  button: {
    fontSize:18 
},

forgotPassLink:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'end'

},

  
}));