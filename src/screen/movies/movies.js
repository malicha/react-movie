import React, { Component } from 'react'
import CardMovie from '../../components/card-movie/card-movie';
import Axios from 'axios';
import './movies.css';

export default class Movies extends Component {
    state= {
        movies: []
    }
    getData = () => {
        Axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=4b79163ef3bf5048e4b25dbf42578ca3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        )
        .then((ress)=>{
            console.log(ress.data.results)
            const results = ress.data.results
            this.setState({
                movies : results
            })
             console.log(this.state.movies, ">>>ini data film")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    componentDidMount(){
        this.getData();
    }

    storeMovies = data => {
        const movies = data.results.map(result => {
          const {
            vote_count,
            id,
            genre_ids,
            poster_path,
            title,
            vote_average, 
            release_date
          } = result;
          return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date };
        });
    
        this.setState({ movies });
      };

  render(){
    return(
        <section>
        <ul className="movies">
            {this.state.movies.map((movie, index) => (
                <CardMovie key={movie.id} movie={movie} />
            ))}
        </ul>
        </section>  
    );
  }
}
