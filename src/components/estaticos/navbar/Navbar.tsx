import React from 'react';
import { AppBar, Toolbar, Typography, Grid,Button } from '@material-ui/core';
import {Box} from '@mui/material';
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="regular">
                <Grid container justifyContent={'flex-start'}>
                        <Box >
                            <img src="./src/assets/image/icon.png" alt="icone" width="70px" height="70px" />
                        </Box>
                        </Grid>
                    <Grid container justifyContent={'space-between'}>

                        <Box display="flex" justifyContent="start">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" >
                                    Home
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" >
                                    Postagens
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" >
                                    Temas
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" >
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                            </Box>
                            
                     </Grid> 
                    
                            <Box display="flex" justifyContent="end" >
                                <Box mx={1} style={{ cursor: "pointer" }}>
                                <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#20C2A8", color: "#ffffff" }}>Logout</Button>
                                    
                                </Box>
                            </Box>
                       
                      </Toolbar> 
                
               
            </AppBar>
        </>
    )
}

export default Navbar;