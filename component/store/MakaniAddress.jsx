import { checkAddress } from "api/store";
import { Grid, TextField, Button } from "@mui/material"

const MakaniAddress = ({ handleTextChange, handleNumberChange, validAddress, setValidAddress, validiation, setValidiation, storeData, setStoreData }) => {

    const categoryList = [1, 4, 12, 15, 18, 22, 24];
    
    // checking building category to be added 
    const checkCategory = (category) => {
        if (categoryList.includes(category)) {
            setValidiation({ ...validiation, faild: true, message: 'يجب أن يكون العنوان المدخل من ضمن التصنيفات المتاحة' });
            return true;
        }
        setValidiation({ success: false, faild: false, message: '' });
        return false;
    }
    
    // address validation and get store info
    const handleCheckAddressClick = async (e) => {
        e.preventDefault();
        const { postcode, building_number } = storeData;

        if (postcode !== '' && building_number !== '') {
            try {
                const data = await checkAddress(postcode, building_number);
            
                if(data.status === 'invalid'){
                    setValidiation({ ...validiation, faild: true, message: 'العنوان يجب أن يكون صحيح ومن ضمن التصنيفات المتاحة' });
                }
                else if(checkCategory(data.CategoryId)) {
                    setValidiation({ ...validiation, faild: true, message: 'يجب أن يكون العنوان المدخل من ضمن التصنيفات المتاحة' });
                }
                else if(data.is_exist === true){
                    setValidiation({ ...validiation, faild: true, message: 'هذا العنوان موجود مسبقا !' });
                }
                else{
                    setValidAddress(true);
                    setStoreData({...storeData,
                        category: data.category,
                        category_id: data.CategoryId,
                        market_phone: data.phoneNumber,
                        name: data.name,
                        details: data.details
                    })
                }
            } catch (error) {
                setValidiation({ ...validiation, faild: true, message: `${error}` });
            }
        }
        else
            setValidiation({ ...validiation, faild: true, message: 'يجب أن تكون المدخلات صحيحة وغير فارغة' });
    }

    return (
        <>
            <Grid item xs={12} sm={6} >
                <TextField name="building_number" fullWidth size="small" id="رقم المبنى" label="رقم المبنى" onChange={handleNumberChange} inputProps={{ maxLength: 4 }} />
            </Grid>

            <Grid item xs={12} sm={6} >
                <TextField name="postcode" fullWidth size="small" id="الرمز البريدي" label="الرمز البريدي" onChange={handleTextChange} inputProps={{ maxLength: 5 }} />
            </Grid>
            {!validAddress ?
                <Grid item  >
                    <Button fullWidth color="secondary" variant="contained" size="large" sx={{ mt: 3, mb: 2, p: 1.5, width: '200px' }}
                        onClick={handleCheckAddressClick}>تحـقـق</Button>
                </Grid>
                : <></>}

        </>
    )
}

export default MakaniAddress