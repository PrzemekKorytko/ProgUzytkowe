import React from 'react';
import {Drawer} from '@material-ui/core';
import {makeStyles, Theme} from'@material-ui/core/styles';
import {useHistory} from 'react-router';

const makeClasses = makeStyles((theme: Theme) => ({
drawerContent: {
margin: '20px',
},
}));

interface IDrawerComponentProps{
shouldBeOpen: boolean,
setShouldBeOpen: CallableFunction,
}

const DrawerComponent: React.FC<IDrawerComponentProps> = ({shouldBeOpen, setShouldBeOpen}) => {
const classes = makeClasses(); 
const history = useHistory();

 const RedirectTo = (path: string, name: string) => <div onClick={() => history.push(path)}>{name}</div>

 return(
 <div>
 <Drawer
 open={shouldBeOpen}
 onClose={() => setShouldBeOpen(false)}
 >
 <div className={classes.drawerContent}>
 <ul>
 <li>{RedirectTo('/', 'Home')}</li>
  <li>{RedirectTo('/movie', 'Movie')}</li>
  <li>{RedirectTo('/search', 'Search Movie')}</li>
  </ul>
  </div>
  </Drawer>
  </div>
  );
  };

  export default DrawerComponent;