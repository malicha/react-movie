import React, { Component } from 'react';
import Selection from '../screen/selection/selection';
import Slider from './slider/slider';
import Button from './button/button'

export default class Navigation extends Component {
  componentDidMount() {
    fetch(this.props.url)
    .then(response => response.json())
    .then(data => this.props.setGenres(data.genres))
    .catch(error => console.log(error));
  }

  onGendreChange = event => {
    this.setState({ genre: event.target.value });
  };

  onChange = data => {
    this.setState({ [data.type]: {
      ...this.state[data.type],
      value: data.value
    
    }
    });
  };

  render() {
    const { genre, genres, onGenreChange, onChange, year, rating, runtime, onSearchButtonClick } = this.props;
    return (
      <section className="navigation">
      <Selection 
      // genres={this.state.genres}
      // genre={this.state.genre} 
      // onGendreChange={this.onGendreChange} 
     genre={genre}
     genres={genres}
     onGenreChange={this.onGendreChange}
     />
      
      <Slider data={year} onChange={this.onChange} />
      <Slider data={rating} onChange={this.onChange} />
      <Slider data={runtime} onChange={this.onChange} />

      <Button onClick={onSearchButtonClick}/>

      </section>  
        
    );
  }
}
