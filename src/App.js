import React, {Component} from 'react';
import CardList from './Components/card-list/Card-List.js';
import SearchBox from './Components/search-box/Search-Box';
import './App.css';

class App extends Component {
        constructor() {
            super();
            this.state = {
                monsters: [],
                searchField: ''
            }
           
        }
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(
                monsters => 
                    this.setState({ monsters: monsters })
                
            )
        }

        handleChange = (e) => {
            this.setState({searchField: e.target.value});
        }

        render() {
            const {monsters, searchField} = this.state;
            const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
                return ( <div className = "App" > 
                <h1>Monsters Rolodex</h1>
                <SearchBox 
                placeholder="search monsters"
                handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}/>
                        </div>
                );
        }
}

export default App;