import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  table: {
    border: '0.3px solid #e0e0e0',
  },
  tableHeaderCell: {
    fontSize: '13pt',
    fontWeight: 600,
    textAlign: 'center',
  },

  tableCell: {
    fontSize: '13pt',
    textAlign: 'center',
  },

}));