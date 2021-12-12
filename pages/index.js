import Head from 'next/head'
import { Box, Grid, Avatar, Divider, Typography } from '@mui/material'
import CopyRight from 'component/assesst/CopyRight'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <title>White Friday - تخفيضات الجمعة البيضاء</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Box sx={{ m: 10, pl: 20, pr: 20, border: '1px solid #e2e2e2', borderRadius: 1, maxWidth: '50%' }}>
          <Grid container direction="column" item spacing={3} sx={{}}>
            <center>
              <Avatar src="https://staging.ly/white-friday/white-friday.png" sx={{ width: 400, height: 'auto' }} />
            </center>
            <Divider sx={{ mt: 5, mb: 5 }} />
            <Typography variant="h4"  >تخفيضات الجمعة البيضاء 26/11/2021  </Typography>
            <CopyRight />
          </Grid>
        </Box>
      </div>

    </>
  )
}
