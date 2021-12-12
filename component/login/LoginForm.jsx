import { Avatar, Button,TextField ,Box, Container, IconButton,InputAdornment ,Alert }from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import CopyRight from 'component/assesst/CopyRight';
import useStyles from './style'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { logIn } from 'api/user';
import cookie from 'js-cookie';

const LoginForm = () => {
    const router = useRouter();
    const classes = useStyles();
    
    const [showPassword , setShowPassword] = useState(false);
    const [validiation, setValidiation] = useState({success:false , faild:false , message:''});
    const [logData , setLogData] = useState({username:'', password:''});

    const handleChange = (e) => {
        setLogData({...logData , [e.target.name]:e.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {username , password} = logData;
     
        if(username === '' || password === ''){
            setValidiation({...validiation,faild:true, message:'يجب أن تكون المدخلات صحيحة وغير فارغة'});
        }
        else {
            try {
                const data = await logIn(logData);
                if(data.status === 200){
                    setValidiation({...validiation,faild:false,success:true , message:'لقد تم تسجيل الدخول بنجاح'});
                    cookie.set('accessToken', data.data.access_token,);
                    cookie.set('refreshToken', data.data.refresh_token,);
                    cookie.set('loggedIn',true,);
                    router.replace('/registeredStores');
                }
                else if(data.status === 405) {
                    setValidiation({ ...validiation, faild: true, message: 'يرجى التأكد من صحة اسم المستخدم وكلمة المرور' });
                }
                else {
                    setValidiation({ ...validiation, faild: true, message:data.data.msg  });
                }
            } catch (error) {
                setValidiation({ ...validiation, faild: true, message:error.message  });
            }
        } 
      
    };

    return (
        <>
            <Container component="main" maxWidth="xs" justify = "center">
                <Box className={`${classes.loginFormContainer}`}>
                    <Avatar src="/white-friday.png" sx={{ m: 1 }} className={`${classes.avatar}`}></Avatar>
                    
                    <form component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}  >

                    {validiation.success?<Alert severity="success">{validiation.message}</Alert>:<></>}
                    {validiation.faild?<Alert severity="error">{validiation.message}</Alert>:<></>}

                        <TextField margin="normal" required size="small" fullWidth id="username" label="اسم المستخدم" name="username" autoFocus onChange={handleChange} />
                        <TextField margin="normal" required size="small" fullWidth name="password" label="كلمة المرور" type={showPassword?`text`:`password`} id="password" onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={(e)=>{setShowPassword(!showPassword)}}>
                                            <Visibility />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        
                        <Button type="submit" fullWidth color='secondary' variant="contained" size="large" className={`${classes.button}`} sx={{ mt: 3, mb: 2 }}>دخول</Button>
                        
                    </form>

                    {/* copy right section */}
                    <CopyRight />
                    
                </Box>
               
            </Container>


        </>
    )
}

export default LoginForm




