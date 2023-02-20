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
<MailIcon className='contactIcons'/> <p className='contactLinks'>aliaryani69@gmail.com</p>

</Stack>
{/* <Stack
  style={{marginTop:16}}
  ml={1}
  direction="row"
  justifyContent="left"
  alignItems="center"
  spacing={2}
><MobileFriendlyIcon className='contactIcons'/> <p className='contactLinks'>+98 936-986-5577</p>
</Stack> */}
<Stack
  style={{marginTop:16}}
  ml={1}
  direction="row"
  justifyContent="left"
  alignItems="center"
  spacing={2}
><LinkedInIcon className='contactIcons'/> <p className='contactLinks'>linkedin.com/in/ali-aryani</p>
</Stack>
<Stack
  style={{marginTop:16}}
  ml={1}
  direction="row"
  justifyContent="left"
  alignItems="center"
  spacing={2}
><GitHubIcon className='contactIcons'/> <p className='contactLinks'>github.com/aliaryani</p>
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
