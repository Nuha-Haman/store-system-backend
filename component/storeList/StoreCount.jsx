import StoreIcon from '@mui/icons-material/Store';
import {Box, Divider,Typography } from '@mui/material';


export default function StoreCount({totalStores}) {
  return (
    <center>
      <Box m={5} p={2}
      sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          color: 'text.secondary',
          '& svg': {
            m: 3,},
          '& hr': {
            mx: 0.5,},
        }}>
    
        <StoreIcon />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Typography variant="h6"> العدد الكلي للمحلات المسجلة <br/><b> {totalStores}</b> </Typography>
                
      </Box>
    </center>
  );
}