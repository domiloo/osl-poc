import React, {Component} from 'react';
import './App.css';
import WeekSelector from "./Components/WeekSelector";
import TaskList from "./Components/TaskList";

class App extends Component {

    isVerplant(item) {
        console.log(item.id);
        console.log(this.state.planungen.plans.filter(f => f.taskId === item.id).length);
        return this.state.planungen.plans.filter(f => f.taskId === item.id).length > 0;
    }

    constructor(props) {
        super(props);
        this.state = {
            weeknumber: 15,
            planungen: {
                "plans": [
                    {
                        taskId: 15,
                        stundenId: 22
                    },
                    {
                        taskId: 2,
                        stundenId: 22
                    }
                ]
            },
            taskList: {
                "tasks": [
                    {id: 15,
                        title: "Aufgabe1x",
                        fach: "Mt",
                        done: true
                    },
                    {
                        id: 2,
                        title: "Aufgabe2x",
                        fach: "Dt",
                        done: false
                    }
                    ,
                    {
                        id: 3,
                        title: "Aufgabe3x",
                        fach: "Mt",
                        done: true
                    },
                    {
                        id: 4,
                        title: "Aufgabe5x",
                        fach: "Fr",
                        done: true
                    }]
            },
            faecher: ["Dt", "Mt", "Fr"]
        }
    }

    render() {
        return (
            <div className="App">
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

                        </ul>
                        <span className="navbar-text">
                                <WeekSelector week={this.state.weeknumber}/>
                            </span>
                    </div>
                </nav>

                <main role="main" className="container">

                    <div className="starter-template">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    Alle Tasks <br/>
                                    {this.state.faecher.map((item, key) =>
                                        <TaskList fach={item} tasks={this.state.taskList.tasks.filter(f => f.fach.localeCompare(item) === 0)}/>
                                    )}
                                </div>
                                <div className="col-sm">
                                    Planung
                                    {this.state.faecher.map((item, key) =>
                                        <TaskList fach={item} tasks={this.state.taskList.tasks.filter(f => f.fach.localeCompare(item) === 0 && this.isVerplant(f))}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        );
    }
}

export default App;
