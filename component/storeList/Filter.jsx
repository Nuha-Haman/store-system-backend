import { Container, Grid, TextField } from "@mui/material"

const Filter = ({setFilterTerm}) => {

    const handleChange = (e) => {
        setFilterTerm(e.target.value)
    }
    
    return (
        <>
            <Container xs={12}  sx={{ mt: 3, mb: 3, minWidth: '90%' }}>
                <Grid container spacing={3} sx={{ display: 'flex' , justifyContent:'center' }}>
                    <Grid item xs={12} sm={10} >
                        <TextField name="name" fullWidth id="name" label="بحث" onChange={handleChange}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Filter;