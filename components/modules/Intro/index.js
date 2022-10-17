import Link from 'next/link';
import Image from 'next/image';
import Header from '../../ui/theme/Header';
import { Button, Container, Grid } from '@mui/material';


const styles = {
    paperContainer: {
        backgroundImage: `url(${"/overlay.svg"})`,
        backgroundSize: 'contain',
        backgroundPosition:'right top',
        backgroundRepeat:'no-repeat'
    }
};


const Intro = ({executeScroll,handleClick}) => (
    <div style={styles.paperContainer}>
    <Container >
    <Header executeScroll={executeScroll} handleClick={handleClick}/>
    <Grid container spacing={2} style={{padding:"8rem 10px"}}>
      <Grid xs={12} md={6}>
        <h1>Hi There!</h1>
        <h2 style={{fontSize:"32pt",color:"rgb(112, 112, 112)",fontWeight:"normal"}}>
          I’m Ali and I’m a Software engineer!
        </h2>
        <Button size="large" variant="contained" onClick={()=>handleClick("contact")}>Hire me</Button>
      </Grid>
      <Grid xs={12} md={6}>
        <Image
          src="/dev.svg"
          alt="I’m John and I’m a JAMStack engineer!"
          width={463}
          height={273}
          layout="responsive"
          objectFit="contain"
          priority
        />
      </Grid>
    </Grid>
    </Container>
    </div>
);

export default Intro;
