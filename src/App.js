import { Component } from "react";
import { CardList } from "./CardList";
import { robots } from "./robots";
import { SearchBox } from "./SearchBox";
import './App.css'


class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => { this.setState({robots: users})})
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
    })

    if(this.state.robots.length === 0){
      return <h1 className='pb-10 pt-10 text-5xl text-blue-400 shadow-2xl'>Loading</h1>
    } else {

        return (
          <div className="body min-h-screen">
            <h1 className='pb-10 text-center pt-10 text-5xl text-blue-400 shadow-2xl'>robotfriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
          </div>
        );
      }
    }

}

export default App;
