import React from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import {ListItem } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import SvgIcon from '@material-ui/core/SvgIcon';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
  navBar: {
    width:'100%',
    maxWidth: 300,
    height: '100%',
  },
  paper:{
    margin: 16,
    padding: 16,
    width: 225,
    maxHeight: 300,
  },
  card:{
    margin: 16,
    width: '100%',
    maxWidth: '1280',
    display: 'flex',
  } 
}));

export default function NavBar() {

  var history = useHistory();

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState([]);

  function handleListItemClick(event, index){
    setSelectedIndex(selectedIndex => [...selectedIndex, index]
      );
      console.log(index);

      if(index == 0){
        history.push('/home');
      }
      if(index == 1){
        history.push('/area_atleta');
      }
      if(index == 2){
        // history.push('/home');
      }
      if(index == 3){
        // history.push('/home');
      }

  }

  return (
    <div className={classes.navBar}>
      <Paper className={classes.paper}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem 
            button={true} 
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button={true}
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Área do Atleta" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItem
            button={true}
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary="Suporte" />
          </ListItem>
          <ListItem
            button={true}
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Calendário" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}