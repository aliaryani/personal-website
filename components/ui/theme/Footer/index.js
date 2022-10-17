import { Container } from '@mui/material';
import Image from 'next/image';


const styles = {
  paperContainer: {
      backgroundImage: `url(${"/footer.svg"})`,
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
      padding:"14rem 0px 4rem",
      backgroundPosition:"center top"
  }
};

const Footer = () => (
  <div style={styles.paperContainer}>
 <Container >
 
   <div className="mb-8 md:mb-0">
        <h2 style={{color:"#121212"}}>Ali Aryani</h2>
        <span style={{color:"#121212"}}>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a
            href=""
            rel="noopener noreferrer"
            target="_blank"
            style={{color:"#121212"}}
          >
            aliaryani
          </a>
        </span>
      </div>
      
    </Container>
  </div>
);

export default Footer;
