import useStyles from './style'
import { Avatar, Typography, Box, Grid, Alert, Divider } from "@mui/material"
import Link from 'next/link'
import { useState } from "react";
import MakaniAddress from "./MakaniAddress";
import StoreData from "./StoreData";
import CopyRight from 'component/assesst/CopyRight';

const StoreRegisterForm = () => {
    const classes = useStyles();
    const [validAddress, setValidAddress] = useState(false);
    const [validiation, setValidiation] = useState({ success: false, faild: false, message: '' });
    const [storeData, setStoreData] = useState({ postcode: '', building_number: '', name: '', owner_name: '', market_phone: '', owner_phone: '', email: '', category: '', category_id: 0, details: '' });

    const handleTextChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let id = event.target.id;

        if (!isNaN(value) && value !== '')
            setValidiation({ ...validiation, faild: true, message: ` ${id} لا يمكن أن يحتوي على أرقام` });

        else {
            setStoreData({ ...storeData, [name]: value });
            setValidiation({ success: false, faild: false, message: '' });
        }
    };

    const handleNumberChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let id = event.target.id;

        if (isNaN(value))
            setValidiation({ ...validiation, faild: true, message: ` ${id} يجب أن يكون أرقام فقط` });
        else {
            setStoreData({ ...storeData, [name]: value });
            setValidiation({ success: false, faild: false, message: '' });
        }
    };

    return (
        <>
            {/* Main Form Box */}
            <center>
                <Box component="form" noValidate sx={{ m: 10, pl: 20, pr: 20, border: '1px solid #e2e2e2', borderRadius: 1, maxWidth: '50%' }}>
                    <Avatar src="https://staging.ly/white-friday/white-friday.png" sx={{ width: 280, height: 'auto' }} ></Avatar>
                    <Grid container direction="column" item spacing={3} >
                        <Grid item xs={12} sm={12} >
                            <Typography variant="h5" sx={{ fontWeight: 600 }}>نموذج التسجيل </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} >
                            {validiation.success ? <Alert severity="success">{validiation.message}</Alert> : <></>}
                            {validiation.faild ? <Alert severity="error">{validiation.message}</Alert> : <></>}
                        </Grid>

                        <MakaniAddress handleNumberChange={handleNumberChange} handleTextChange={handleTextChange} validAddress={validAddress} setValidAddress={setValidAddress} validiation={validiation} setValidiation={setValidiation} storeData={storeData} setStoreData={setStoreData} />

                        {validAddress ? <Divider sx={{ mt: 3 }} /> : <></>}

                        {validAddress ? <StoreData handleNumberChange={handleNumberChange} handleTextChange={handleTextChange} validiation={validiation} setValidiation={setValidiation} setValidAddress={setValidAddress} storeData={storeData} /> : <></>}

                        <Divider sx={{ mt: 5 }} />

                        <Grid item xs={12} sm={12} >
                            <Typography variant="subtitle1" className={classes.link}>ليس لديك عنوان،
                                <Link href={`https://makani.ly/addplace/`} >
                                    <a target="_blank" rel="noreferrer" >
                                        قم بتسجيل نشاطك التجاري الآن
                                    </a></Link>
                            </Typography>
                        </Grid>

                        {/* copy right section */}
                        <CopyRight />
                    </Grid>

                </Box>
            </center>
        </>
    )
}
export default StoreRegisterForm;
