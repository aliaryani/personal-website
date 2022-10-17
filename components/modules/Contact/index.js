import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import MailIcon from '@mui/icons-material/Mail';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from '@mui/system';

const Contact = ({ref}) => (
    <Container  style={{marginTop:100}} ref={ref}>
    <Grid container spacing={2} alignItems="center">
    <Grid xs={12} md={6} >
    <Stack
  direction="row"
  justifyContent="left"
  alignItems="center"
  spacing={2}
  ml={1}
>
<MailIcon style={{color:"#1976d2",fontSize:36}}/> <p style={{color:"rgb(112, 112, 112)",fontSize:'1.2rem'}}>aliaryani69@gmail.com</p>

</Stack>
<Stack
  style={{marginTop:16}}
  ml={1}
  direction="row"
  justifyContent="left"
  alignItems="center"
  spacing={2}
><MobileFriendlyIcon style={{color:"#1976d2",fontSize:36}}/> <p style={{color:"rgb(112, 112, 112)",fontSize:'1.2rem'}}>+98 936-986-5577</p>
</Stack>
<Stack
  style={{marginTop:16}}
  ml={1}
  direction="row"
  justifyContent="left"
  alignItems="center"
  spacing={2}
><LinkedInIcon style={{color:"#1976d2",fontSize:36}}/> <p style={{color:"rgb(112, 112, 112)",fontSize:'1.2rem'}}>linkedin.com/in/ali-aryani</p>
</Stack>
<Stack
  style={{marginTop:16}}
  ml={1}
  direction="row"
  justifyContent="left"
  alignItems="center"
  spacing={2}
><GitHubIcon style={{color:"#1976d2",fontSize:36}}/> <p style={{color:"rgb(112, 112, 112)",fontSize:'1.2rem'}}>github.com/aliaryani</p>
</Stack>
    </Grid>
    <Grid xs={12} md={6}><Image
        src="/contact.svg"
        alt="I’m Ali and I’m a Software engineer!"
        width={498}
        height={313}
        layout="responsive"
        objectFit="contain"
      /></Grid>
      </Grid>

      </Container>
   
      
  
);

export default Contact;
