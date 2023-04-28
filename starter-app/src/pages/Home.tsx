import React ,{ReactElement,FC} from "react"
import{Box,Typography} from "@mui/material"
const Home:FC <any> =():ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor:'dark',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}><Typography variant="h1">𝕮𝕽𝕺𝕾𝕾</Typography>
        <Box>

            <img src="https://img.freepik.com/vector-gratis/emblema-marihuana-monocromo-vintage_225004-1050.jpg" alt="canabis shop" />

        </Box>
        </Box>
    )
}
export default Home;