import { Grid, Container,Table , TableBody,TableCell ,TableHead ,TableRow} from '@mui/material';
import useStyles from './style';


const StoreList = ({stores}) => {
    const classes = useStyles();
    return (
        <>
            <Container xs={12} sx={{ mt: 3, mb: 3, minWidth: '90% ' }}>

                <Grid sx={{ display: 'flex', flexDirection: 'column' }}>

                    <Table size="medium" className={classes.table}>
                        <TableHead>
                            <TableRow >
                                <TableCell className={`${classes.tableHeaderCell}`}> تسلسل</TableCell>
                                <TableCell className={`${classes.tableHeaderCell}`}>اسم المحل</TableCell>
                                <TableCell className={`${classes.tableHeaderCell}`}>العنوان البريدي</TableCell>
                                <TableCell className={`${classes.tableHeaderCell}`} >رقم المبنى</TableCell>
                                <TableCell className={`${classes.tableHeaderCell}`}> اسم المالك</TableCell>
                                <TableCell className={`${classes.tableHeaderCell}`}>رقم هاتف المالك</TableCell>
                                <TableCell className={`${classes.tableHeaderCell}`}>رقم هاتف المحل</TableCell>
                                <TableCell className={`${classes.tableHeaderCell}`}> البريد الإلكتروني</TableCell>
                                <TableCell className={`${classes.tableHeaderCell}`}>نوع النشاط</TableCell>
                                <TableCell className={`${classes.tableHeaderCell}`}>تاريخ التسجيل</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {stores?.map((store,index) => (
                                <TableRow key={index}  >
                                    <TableCell className={`${classes.tableCell}`}>{index + 1}</TableCell>
                                    <TableCell className={`${classes.tableCell}`}>{store?.name}</TableCell>
                                    <TableCell className={`${classes.tableCell}`}>{store?.postcode}</TableCell>
                                    <TableCell className={`${classes.tableCell}`}>{store?.building_number}</TableCell>
                                    <TableCell className={`${classes.tableCell}`}>{store?.owner_name}</TableCell>
                                    <TableCell className={`${classes.tableCell}`}>{isNull(store?.owner_phone)}</TableCell>
                                    <TableCell className={`${classes.tableCell}`}>{isNull(store?.market_phone)}</TableCell>
                                    <TableCell className={`${classes.tableCell}`}>{isNull(store?.email)}</TableCell>
                                    <TableCell className={`${classes.tableCell}`}>{store.category}</TableCell>
                                    <TableCell className={`${classes.tableCell}`}>{store?.created_at.slice(5,16)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Container>
        </>
    )
}

export default StoreList;

function isNull (value){


   if(value === "")
   return "------"

   return value
}