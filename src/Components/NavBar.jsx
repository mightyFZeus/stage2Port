import React,{useState, useEffect, useContext} from 'react'
import {AppBar, Drawer, Toolbar, List, ListItem,IconButton} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from './Styles'
import './Styles.css'

import {Link} from 'react-router-dom'




const NavBar = () => {
 
    const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => setDrawer(open);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const classes = useStyles()
    return (
        <div
        
        >
            {isDesktop?<div>
        <AppBar
       position='fixed'
        className={classes.appbar}

      >
        <Toolbar>
            <Link className='cart-link' to='/'>
            <p className='title'>Figo</p>
            </Link>
          <ul>
            <li>Services</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </Toolbar>
      </AppBar>
      </div>: 
      <div>
        <AppBar position='fixed' className={classes.appbar} >
            <Toolbar>
              <div className='container'>
              
                <div className='menu-icon' >
                  <IconButton  onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                  
                    className={classes.test}
                    anchor={"right"}
                    open={drawer}
                    onClose={toggleDrawer(false)}
                  > 
                    <List>
                    
                        <ListItem>
                        Services
                      </ListItem>
                     
                     
                        <ListItem>
                        Work
                      </ListItem>
                     
                      <ListItem>
                       Contact
                      </ListItem>
                    
                      </List>
                  </Drawer>
                  </div>
                  <div>
            <Link className='cart-link' to='/'>
            <p className='title'>Figo</p>
            </Link>
            </div>
              </div>
            </Toolbar>
          </AppBar>  
      </div>
      }
   
        </div>
    )
}

export default NavBar