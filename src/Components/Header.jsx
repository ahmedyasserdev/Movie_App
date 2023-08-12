import { Box, useTheme, Container, Typography, Stack, Avatar, Link,  } from "@mui/material"
import ThemeSwitcher from "./ThemeSwitcher"
const Header = () => {
    const theme = useTheme()
    return (
        <Box sx={{ height: "70px", py: 1.5, backgroundColor: theme.palette.bgColor.header , }} component="header" >

            <Container  >

                <Stack direction={"row"} justifyContent={"space-between"} px={{ xs: 5, sm: 15 }} alignItems={"center"} >



                    <Stack gap={3} direction={"row"} alignItems={"center"} >
                        <Link href="/" sx={{ textDecoration: "none" }}   >
                            <Typography variant="h4" component="p"  color  = {"white"}   >
                                Movie App

                            </Typography>
                        </Link>

                        <ThemeSwitcher />

                    </Stack>


                    <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />

                </Stack>



            </Container>

        </Box>
    )
}

export default Header