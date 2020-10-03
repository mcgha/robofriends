import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots'; //demo
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

const state = {

}

class App extends Component {
    //you need a constructor if you want to use this.state
    //what affects your app
    constructor() {
        super()
        //you must call super() to use this.
        this.state = {
            //this that can change and affect app
            //live in parent component that passes state to different components
            //robots: robots, for demo
            robots: [],
            searchField: '' //smart components
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            })

    }
    //can add your own functions BUT use arrow functions 
    //so instead of onSeachBox(event) {
    //console.log(event.target.value);//always use event.target.value
    onSeachBox = (event) => {
        //React rule, use:
        this.setState({ searchField: event.target.value })

    }


    render() {
        // const filteredRobots = this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        // }) //before destructure
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        //create filteredRobots here to use it as props
        // if (!robots.length) {
        //     return <h2 className='tc'>Loading please wait...</h2>
        // } else {
        //     return (
        //         <div className='tc'>
        //             <h1 className='f2'>RoboFriends</h1>
        //             <SearchBox searchChange={this.onSeachBox} />
        //             <Scroll> 
        //                 <CardList robots={filteredRobots} />
        //             </Scroll>
        //         </div>
        //     );
        // }
        return !robots.length ? <h2 className='tc'>Loading please wait...</h2> : (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSeachBox} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;