import React from 'react';
import Header from './components/Header'
import './App.css'
import { StylesProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';




const App: React.FC = () => {
  const classes = useStyles();

  return (
    <StylesProvider>
          <div className="App">
            <Header />
            <Container className={classes.box_container}>
              <Box className={classes.col}>
                <Box className={classes.search_container}>
                  <TextField className={classes.search_input}
                  label="Search..."
                  variant="outlined"
                  
                  />
                  <Box className={classes.search_results_wrapper}>
                      <Typography variant="h6">
                          Search results
                       </Typography> 
                       <Box className={classes.search_results}></Box>
                  </Box>
                </Box>
                
              </Box>
              <Box className={classes.col}>2</Box>
            </Container> 
          </div>
    </StylesProvider>
  )
}
export default App;
const useStyles = makeStyles({
  header: {
      width:'100%',
      backgroundColor:'grey'
 
  },

  box_container: {
    display:'flex',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  col: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100vh'

  },

  search_container: {},
  search_results_wrapper: {},
  search_results: {
    height:'100px',
    width:'500px',
    border:'solid 1px'
  },
  search_input: {
    width: '100%',
    margin: '20px 0',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#3f51b5',
      },
      '&:hover fieldset': {
        borderColor: '#3f51b5',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3f51b5',
      },
    },
  },
});

