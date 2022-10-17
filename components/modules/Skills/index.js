import Link from 'next/link';
import Image from 'next/image';
import { Button, Container, Grid } from '@mui/material';


const styles = {
    paperContainer: {
        backgroundImage: `url(${"/details.svg"})`,
        backgroundSize: 'contain',
        backgroundPosition:'left top',
        backgroundRepeat:'no-repeat'
    }
};


const Skills = ({myRef,handleClick}) => (
   
    <div style={styles.paperContainer} ref={myRef}>
         <Container  style={{marginTop:100}}>
    <Grid container spacing={2} alignItems="center">
    <Grid xs={12} md={6}>
        <Image
          src="/skills.svg"
          alt="I’m John and I’m a Backend & Devops engineer!"
          width={447}
          height={326}
          layout="responsive"
          objectFit="contain"
        />
      </Grid>
      <Grid xs={12} md={6} sx={{ mt:{xs:22,md:0}}}>
        <h1 style={{padding:"0 10px"}}>More about me</h1>
        <p style={{color:"rgb(112, 112, 112)",fontSize:"16pt",padding:"0 10px"}}>
        7+ years experience as a Front-end Web Developer on large-scale projects. Enthusiast
in working with new technologies and tools. Develop Responsive websites precise and
pixel-perfect user interfaces from scratch. Experienced in a plethora of diverse projects
and has a view of the market for business tech purposes.
        </p>
        <Button size="large" variant="contained" onClick={()=>handleClick("contact")} style={{margin:"0 10px"}}>Hire me</Button>
      </Grid>
    </Grid>
    </Container>
  </div>
  
);

export default Skills;
