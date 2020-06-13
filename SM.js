import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel';
import movieService, { IMoviesProps } from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useDebounce from '../../hooks/debounce';

const useStyles = makeStyles({
card: {
marginBottom: "25px",
width: "500px",
textAlign: "center",
},
cardMedia: {
paddingTop: '100%',
},
input: {
padding: "10px 10px",
marginBottom: "20px",
width: "250px",
},
});

const SearchMovie = () => {
const classes = useStyles();
const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
const [movieToSearch, setMovieToSearch] = React.useState(``);
const debounceSearch = useDebounce(movieToSearch, 300);

React.useEffect(() => {
movieService.searchByName(movieToSearch).then(resp => {
if (resp) {
setMovies(resp);
}
});
//movieService.searchById('tt0848228');
}, [debounceSearch]);

return (
<div>
<NavPanel />
<Box
display="flex"
flexWrap="wrap"
flexDirection="column"
alignItems="center">

<input
placeholder="Enter movie title"
onChange={event => setMovieToSearch(event.target.value)}
className={classes.input}
/>

{!!movies?.movies.length &&
movies?.movies.map(movie => (
<Card key={movie.id}
className={classes.card}>
<CardMedia
className={classes.cardMedia}
image={movie.poster}
title={movie.title}
/>
<CardContent>
<Typography variant="h5" color="textSecondary" component="p">
{movie.title}
</Typography>
<Typography variant="body1" color="textSecondary" component="p">
{movie.type}
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
{movie.year}
</Typography>
</CardContent>
</Card>
))
}
</Box>
</div>
);
};

export default SearchMovie;