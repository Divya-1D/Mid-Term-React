import React, { useState } from "react";
// Importing material ui cores to use them in app
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";

// Menyicon used while screen size changes to lesser like a mobile view
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "Primary",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));


// Functional Component used for setting up a drawer which contains Home and Saved Notes
//  And routes to a link when onclicked
function DrawerComponent() {
    const classes = useStyles();
      const [openDrawer, setOpenDrawer] = useState(false);
          return (
            <>
                 <Drawer
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                 >
                   <List>
                     <ListItem onClick={() => setOpenDrawer(false)}>
                       <ListItemText>
                          <Link to="/" className={classes.link}>Home</Link>
                       </ListItemText>
                      </ListItem>
                      <Divider />
                      <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                           <Link to="/notes" className={classes.link}>Saved Notes</Link>
                        </ListItemText>
                      </ListItem>
                      <Divider/>
                    </List>
                 </Drawer>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.link}>
                  <MenuIcon />
                </IconButton>
            </>
  );
}
export default DrawerComponent;
