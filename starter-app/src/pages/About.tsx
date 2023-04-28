import React ,{ReactElement,FC} from "react"
import{Box,Typography} from "@mui/material"
const About:FC <any> =():ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor:'dark',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}><Typography variant="h3">Cross Compani</Typography>
        <Typography variant="h4"> Empresa dedicada a la venta de insumos canabicos de forma legal 
        y traidos de plantaciones 100% legales y en norma
        nuestros porductores son estrictamente fiscalisados y 
        nuestros empleados son 100% 
        testeados todas las semanas para verificacion de test de narcoticos</Typography>
        <Box>
            <img src="https://img.freepik.com/vector-gratis/emblema-marihuana-monocromo-vintage_225004-1050.jpg" alt="Canabis shop"></img>
        </Box>
        </Box>
    )
}
export default About;