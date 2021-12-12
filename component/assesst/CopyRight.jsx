import Link from 'next/link'
import useStyles from './style'
import {  Typography, } from "@mui/material"
const CopyRight = () => {
    const classes = useStyles();
    return (
        <>
      
        <Typography variant="body2" className={classes.link} align="center" >
            {'جميع الحقوق محفوظة  © '}
            <Link color="inherit" href="https://lamah.com/">
            <a target="_blank" rel="noreferrer">lama co</a>
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
   

        </>
    )
}

export default CopyRight;