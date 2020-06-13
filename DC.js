import React from 'react';
import { Drawer, Button } from '@material-ui/core';
import { Home, Theaters, Search } from '@material-ui/icons';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const makeClasses = makeStyles((theme: Theme) => ({
drawerContent: {
margin: '20px',
 },
 button: {
 width: '100%',
 marginBottom: '2px',
 },
 }));

 interface IDrawerComponentProps {
 shouldBeOpen: boolean,
 setShouldBeOpen: CallableFunction,
 }

 const DrawerComponent: React.FC<IDrawerComponentProps> = ({ shouldBeOpen, setShouldBeOpen }) => {
 const classes = makeClasses();
 const history = useHistory();

 const RedirectTo = (path: string, name: string) => <div onClick={() => history.push(path)}>{name}</div>

 return (
 <div>
 <Drawer
 open={shouldBeOpen}
 onClose={() => setShouldBeOpen(false)}>
 <div className={classes.drawerContent}>
 {/*<ul>
 <li>{RedirectTo('/', 'Home')}</li>
 <li>{RedirectTo('/movie', 'Movie')}</li>
 <li>{RedirectTo('/search', 'Search Movie')}</li>
 </ul>*/}
 <div>
 <Button
 startIcon={<Home />}
 variant="contained"
 color="primary"
 className={classes.button}>
 {RedirectTo('/', 'Home')}
 </Button>
 </div>
 <div>
 <Button
 startIcon={<Search />}
 variant="contained"
 color="primary"
 className={classes.button}>
 {RedirectTo('/search', 'Search Movie')}
 </Button>
 </div>
 <div>
 <Button
 startIcon={<Theaters />}
 variant="contained"
 color="primary"
 className={classes.button}>
 {RedirectTo('/movie', 'Movie')}
 </Button>
 </div>
 </div>
 </Drawer>
 </div>
 );
 };

 export default DrawerComponent;


