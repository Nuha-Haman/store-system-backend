import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import { refreshAccessToken } from 'api/user';
import { filterStores } from 'api/store';
import cookie from "js-cookie";

const PaginationButton = ({total , filterTerm, setStoreData}) => {
    const handleChange = async (e , v) => {
        try {
            let { data } = await filterStores(filterTerm, v, 1);
            setStoreData(data);

        } catch (error) {
            if (error?.response?.status === 401); {
                const newToken = await refreshAccessToken();
                cookie.set('accessToken', newToken.data.access_token,);
            }
        }
    }

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" mr={5} >
                <Grid item >
                    <Pagination count={total} color="primary" m={5} onChange={handleChange}/>
                  
                </Grid>
            </Grid>
            </>
    )  
}

export default PaginationButton