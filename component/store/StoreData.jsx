import { Grid, TextField, FormControlLabel, Checkbox, Button, Typography } from "@mui/material"
import { useState } from "react";
import TermsModal from "./TermsModal";
import useStyles from './style'
import { addStore } from "api/store";

const StoreData = ({ handleNumberChange, handleTextChange, validiation, setValidiation,setValidAddress, storeData}) => {

    const [open, setOpen] = useState(false);
    const [checked , setChecked] = useState(false);
    const classes = useStyles();

     // handle of save button
     const handleSubmit = async (e) => {
        const { owner_name, owner_phone } = storeData;
        e.preventDefault();

        if(isNaN(owner_name) && !isNaN(owner_phone) && owner_phone.length === 10 && !validiation.faild)
        try {
            const data = await addStore(storeData);
         
            if(data.status === 201){
                setValidiation({ ...validiation, faild: false, success: true, message: 'لقد تمت عملية الإضافة بنجاح' });
                setValidAddress(false);
            }
            else if(data.status === 422){
                setValidiation({ ...validiation, faild: false, success: true, message: `${data.error}` }); 
            }
            else{
                setValidiation({ ...validiation, faild: true, message: `${data.error}` }); 
            }
        } catch (error) {
            setValidiation({ ...validiation, faild: true, message: `${error}`}); 
        }
        else{
        setValidiation({ ...validiation, faild: true, message: `يرجى التأكد من صحة كتابة اسم المالك ورقم الهاتف ` });
     }
    };


    return (
        <>
            <Grid item xs={12} sm={6} >
                <TextField name="name" fullWidth size="small" id="اسم المحل" label="اسم المحل" disabled  value={storeData?storeData.name:"name"} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <TextField name="details" fullWidth size="small" id="التفاصيل" label="تفاصيل" onChange={handleTextChange} value={storeData?.details}/>
            </Grid>
            <Grid item xs={12} sm={6} >
                <TextField name="owner_name" fullWidth size="small" id="اسم صاحب المحل" label="اسم صاحب المحل" onChange={handleTextChange} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <TextField name="market_phone" fullWidth size="small" id="رقم هاتف المحل" label="رقم هاتف المحل" onChange={handleNumberChange} inputProps={{ maxLength: 13 }} value={storeData?.market_phone} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <TextField name="owner_phone" fullWidth size="small" id="رقم هاتف صاحب المحل" label="رقم هاتف صاحب المحل" onChange={handleNumberChange} inputProps={{ maxLength: 13 }}  />
            </Grid>
            <Grid item xs={12} sm={6} >
                <TextField name="email" type="email" fullWidth size="small" id="البريد الالكتروني" label="البريد الإلكتروني" onChange={handleTextChange} value={storeData?.email} />
            </Grid>
            <Grid item xs={12} sm={6} >
                <TextField name="category" fullWidth size="small" id="نوع النشاط" label="نوع النشاط" disabled  value={storeData?.category} />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex', flexDirection:'row', alignItems:"center"}} >
               <Checkbox defaultChecked onClick={()=>setChecked(!checked)}/>
               <Typography variant="subtitle1" onClick={()=>setOpen(true)} className={classes.termsLabel}> أوافق على شروط الإشتراك </Typography>
            </Grid>

            <Grid item  >
                <Button fullWidth color="secondary" variant="contained" size="large" sx={{ mt: 3, mb: 2, p: 1.5, width: '200px' }}
                disabled={checked} onClick={handleSubmit}>تسجيل</Button>
            </Grid>

            <TermsModal open={open} setOpen={setOpen}/>

        </>
    )
}

export default StoreData