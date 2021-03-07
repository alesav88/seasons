import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = { Lat: null, errorMessage: ''};
         
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({Lat:position.coords.latitude}), 
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
    }

    render() {
        
    if (this.state.errorMessage && !this.state.Lat){
        return <div>Error: {this.state.errorMessage} </div>;
        }

    if (!this.state.errorMessage && this.state.Lat){
        return <SeasonDisplay Lat = {this.state.lat}/>
        }

    return <Spinner message = "Please accept location request"/>

    }
}

ReactDOM.render(<App />, document.querySelector('#root'));