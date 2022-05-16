import logo from './logo.svg';
// import './App.css';
import pic1 from './images/smiley.png'
import { AppBar, Paper, Toolbar, Typography } from '@mui/material';
import { Outlet,Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { deepPurple, teal} from '@mui/material/colors';
import { Avatar} from '@mui/material';
import pic from './images/safety.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
// import ErrorBoundary from './errorboundary';
import {useNavigate} from 'react-router-dom';

const theme=createTheme({
  palette:{
      primary:{
      main:teal[500]
              },
  text:{
      primary:deepPurple[50]
       }
          }
                      })

function App() {
  let navigate=useNavigate()
  var user=sessionStorage.getItem('username')
  if(user!=null){
  console.log(user)
  return (<>
  <ThemeProvider theme={theme}>
    <AppBar postion ='fixed' >
      <Toolbar >
      <Avatar  >{user .slice(0,2).toUpperCase()}</Avatar>
      
         
         <Typography textAlign="center" variant="h5"
          sx={{flex:1}}>Safety Management System</Typography>
           <Link to='/home/injurycentre'><Button variant='contained'style={{margin:7}}>Injury Centre</Button></Link>
         
          <Link to='/home/incidentcentre'><Button variant='contained'style={{margin:7}}>Incident Centre</Button></Link>
          
          <Link to='/home/reports'><Button variant='contained'style={{margin:7}}>Reports</Button></Link> 
          <Link to='/home/incidentaction'><Button variant='contained'style={{margin:7}}>DefinedAction</Button></Link> 
          <Link to='/home/requestaction'><Button variant='contained'style={{margin:7}}>RequestAction</Button></Link> 
        <Button variant='conatined' onClick={()=>{
                  sessionStorage.clear()
                  navigate("/")
                }}>Logout</Button>
        <Avatar alt="image" src={pic} />
      </Toolbar>
    </AppBar>
  </ThemeProvider>
  <div>
  <List style={{top:150,left:350}}>
      <ListItem>
        <ListItemAvatar>
        <ListItemText>
        
         

          </ListItemText>       
        </ListItemAvatar>
      </ListItem>
    </List>
  </div>
  <Outlet/>




  </>
 
  );
              }
              else{
                return <h1>You have not logeed in!!</h1>
                {/* <Avatar alt='image' src={pic1} style={{postion:'relative'}}></Avatar> */}
                
              }
}

export default App;
