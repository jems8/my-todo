import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
// const navItems = ['Home','Apps', 'About', 'Contact'];

const mainNavItem=[
  {
  id:1,
  label:'Home',
  link:'/'
  },
  {
  id:2,
  label:'Apps',
  link:'/apps'
  },
  {
  id:3,
  label:'About',
  link:'/about'
  },
  {
  id:4,
  label:'Contact',
  link:'/contact'
  }]

export default function DrawerAppBar(props) {
  const { window, sx } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
const handleNavigation=(a)=>{
}
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', ...sx }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {mainNavItem.map((item) => (
          <ListItem key={item} disablePadding >
            
            <ListItemButton sx={{ textAlign: 'center' }} onClick={()=>handleNavigation(item.link)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1,   display: { xs: 'none', sm: 'block' } }}
          >
            Logo
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
            {mainNavItem.map((item) => (
              <Button key={item.id }>
                <Link style={{color:'white',textDecoration: 'none'}} to={item.link} className='jaesssssss' >{item.label}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
