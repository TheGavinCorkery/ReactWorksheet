import React, {Component} from 'react';
import axios from 'axios';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jokes: []
         }
    }

    componentDidMount() {
        axios.get('https://v2.jokeapi.dev/joke/Programming?type=single&amount=5')
        .then(res => {
            let joke = []
            joke = res.data.jokes;
            let tempJokes = this.state.jokes;
            joke.map((joke) => {
                return tempJokes.push(joke.joke)
            })
            this.setState({
                jokes: tempJokes
            })
        })
    }

    render() { 
        return ( 
            <div>
                {this.state.jokes.map((joke) =>{
                    return <li key = {joke}>{joke}</li>
                })}
            </div>
         );
    }
}
 
export default Joke;