import {Typography, Box} from '@mui/material';
import Navbar from '../../components/Navbar';
import styles from './home.module.scss';
// import CustomButton from '../../components/generalButtons/button'

const Home = () => {
  // const ButtonClicked = () => {
  //   console.log('Button clicked!');
  // };

  return (
    <Box className={styles.mainWrapper}>
      <Navbar />
      <Typography variant="h4">Home Page</Typography>
      {/* <CustomButton title='click here to submit' label="submit" size="medium" color="primary" onClick={ButtonClicked} /> */}
    </Box>
  );
};

export default Home;
