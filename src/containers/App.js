import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
    const [robots, setRobots] = useState([]);
    //name of state, function that sets state //array destructuring
    const [searchField, setSearchField] = useState('');
    //can add your own functions BUT use arrow functions 
    //useeff(effect you want it to do) //gets run everytime app gets run
    //second param 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users)
            });
    },[]) //only run if this has changed []...empty for now
    //so instead of onSeachBox(event) {
    //console.log(event.target.value);
    const onSeachBox = (event) => {
        //React rule, use:
        // this.setState({ searchField: event.target.value })
        setSearchField(event.target.value)
    }
    // render() { only for extends component
    // const { robots, searchField } = this.state; //already have access to it with hooks
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    //create filteredRobots here to use it as props


    return !robots.length ? <h2 className='tc'>Loading please wait...</h2> : (
        <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBox searchChange={onSeachBox} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;