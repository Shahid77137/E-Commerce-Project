import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Dashboard from './Admin';
import { ThemeProvider } from '@emotion/react';
import { customTheme } from '../them/customeThem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemIcon from '@mui/material/ListItemIcon';
import AdminNavbar from '../Navigation/AdminNavbar';

const drawerWidth = 240;

const menu=["Dashboard","Products","Customers","Orders","Total Earnings","Weekly Overview","Monthly Overview","Add Product"]

export default function DemoAdmin() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const [sideBarVisible,setSideBarVisible]=React.useState(false);

  const drawer = (
    <Box sx={{ overflow: 'auto',display:"flex",flexDirection:"column",justifyContent:"space-between" }}>
      {isLargeScreen && <Toolbar /> }
      <List>
        {menu.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <List sx={{position:"absolute", bottom:0, width:"100%"}}>
      <Divider />
        {["Account","Request"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  const handleSideBarViewInMobile=()=>{
    setSideBarVisible(true)
  }

  const handleCloseSideBar=()=>{
    setSideBarVisible(false);
  }

  const drawerVariant = isLargeScreen ? 'permanent' : 'temporary';

  return (
    <ThemeProvider theme={customTheme}> 
     <Box sx={{ display: `${isLargeScreen?'flex':"block"}` }}>
      <CssBaseline />
      <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile}/>
      
      <Drawer
        variant={drawerVariant}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box', 
            ...(drawerVariant === 'temporary' && {
              top: 0,
              [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]: {
                position: 'fixed',
                left: 0,
                right: 0,
                height: '100%',
                zIndex: (theme) => theme.zIndex.drawer + 2,
              },
            }),
          },
        }}
        open={isLargeScreen || sideBarVisible}
        onClose={handleCloseSideBar}
      >
        {drawer}
      </Drawer>
      <Box component="main" sx={{ flexGrow:1 }}>
        <Toolbar />
       <Dashboard/>
      </Box>
    </Box>
    </ThemeProvider>
   
  );
}
