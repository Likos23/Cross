import React ,{ReactElement,FC} from "react"
import{Box,Typography} from "@mui/material"
import {Link} from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Products:FC <any> =():ReactElement => {
    return (
        <Box sx={{
            flexGrow: 0.9,
            backgroundColor:'dark',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
      <Box>
        <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/marihuana-perjudicial.jpg"
        title="Cigarrillo de marihuana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        𝕮 𝖎 𝖌 𝖆 𝖗 𝖗 𝖎 𝖑 𝖑 𝖔
        </Typography>
        <Typography variant="body2" color="text.secondary">
        𝕮𝖎𝖌𝖆𝖗𝖗𝖎𝖑𝖑𝖔   𝖉𝖊   𝕮𝖆𝖓𝖆𝖇𝖎𝖘
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">𝕭𝖚𝖘𝖈𝖆𝖗 </Button>
        <Button size="small">𝕷𝖊𝖊𝖗 𝖒𝖆𝖘</Button>
      </CardActions>
    </Card>
    </Box>

  <Box
     sx={{
      flexGrow: 0.1,
      display:'flex',
      justifyContent:'right',
      alignItems:'right'
     }}>
    <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://www.royalqueenseeds.es/modules/prestablog/themes/royalqueenseeds/up-img/829.jpg"
        title="Cigarrillo de marihuana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        𝕮𝖔𝖌𝖔𝖑𝖑𝖔𝖘
        </Typography>
        <Typography variant="body2" color="text.secondary">
        𝕮𝖔𝖌𝖔𝖑𝖑𝖔𝖘  𝖈𝖔𝖓  𝖆𝖑𝖙𝖔  𝖕𝖔𝖗𝖈𝖊𝖓𝖙𝖆𝖏𝖊  𝖉𝖊  𝕿𝕳𝕾
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">𝕭𝖚𝖘𝖈𝖆𝖗</Button>
        <Button size="small">𝕷𝖊𝖊𝖗 𝖒𝖆𝖘</Button>
      </CardActions>
    </Card>
    </Box>
   
    <Box
    sx={{
      flexGrow: 0.1,
      display:'flex',
      justifyContent:'right',
      alignItems:'right'
     }}> 
    <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        sx={{ height: 240}}
        image="https://www.latercera.com/resizer/vvNaSgo_ajIYZb8TlKOxQJWUCTE=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/SWVVI5NRFNED5EO5EYXLVE23WA.jpg"
        title="Cigarrillo de marihuana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        𝕻𝖑𝖆𝖓𝖙𝖆𝖘 𝖉𝖊 𝖈𝖆𝖓𝖆𝖇𝖎𝖘
        </Typography>
        <Typography variant="body2" color="text.secondary">
        𝕻𝖑𝖆𝖓𝖙𝖆𝖘 𝖉𝖊 𝖈𝖚𝖑𝖙𝖎𝖛𝖔 𝖆𝖚𝖙𝖔𝖒𝖆𝖙𝖎𝖈𝖔
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">𝕭𝖚𝖘𝖈𝖆𝖗</Button>
        <Button size="small">𝕷𝖊𝖊𝖗 𝖒𝖆𝖘</Button>
      </CardActions>
    </Card>
</Box>
</Box>

    )
}
export default Products;