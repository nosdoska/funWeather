import { Fragment, Component } from 'react';
import { throttle } from 'lodash';

export default class FetchWeather extends  Component {
  state = {
    response: null,
    isLoading: false,
  };

  fetchWeather = (city) => {
    this.setState({
      isLoading: true,
    }, () => {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6dbac6d4d898237a2f7f03f05ad68d67&units=metric`)
        .then(response => response.json())
        .then(response => {
          console.log('response', response);
          this.setState({
            response,
            isLoading: false,
          })
        });
    });
  }

  render() {
    return this.props.children({
      loading: this.state.isLoading,
      getWeather: this.fetchWeather,
      response: this.state.response
    });
  }
}
