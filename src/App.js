import React, {Component} from 'react';
import './App.css';
import WeekSelector from "./Components/WeekSelector";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weeknumber: 15
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <a className="navbar-brand" href="#">OSL PoC</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                            <span className="navbar-text">
                    <WeekSelector week={this.state.weeknumber}/>
                  </span>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default App;
