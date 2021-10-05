import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

function Header(){
    return(
        <Container style={{ backgroundColor: 'orange'}} >
            <Grid>
                <Grid item xs>
                Header
                </Grid>
            </Grid>
        </Container>
    )

}
export default Header;