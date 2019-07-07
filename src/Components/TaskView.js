import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './TaskView.css';
import ToggleButton from "react-bootstrap/ToggleButton";

class TaskView extends Component{

    percFinished() {
        return this.state.task.done === true ? 100 : 0;
    }

    handleDone(e) {
        let newTask = {...this.state.task};
        console.log(newTask);
        newTask.done = !this.state.task.done;
        this.setState({task: newTask});
    }

    constructor(props) {
        super(props);
        this.state = {
            task: props.task
        };
        this.handleDone = this.handleDone.bind(this);
    }

    render() {
        console.log(this.state.task.done);
        return (
            <div className="well output">
                <a href="#" className="list-group-item list-group-item-action taskview">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.state.task.title}</h5>
                        <small>
                        <ToggleButton type="checkbox" name="done" value={this.state.task.done} onClick={this.handleDone.bind(this)}>
                            {this.state.task.done ? "erledigt" : "in Arbeit"}
                        </ToggleButton></small>
                    </div>
                    <span className="badge badge-primary badge-pill align-content-end">{this.state.task.fach}</span>
                    <ProgressBar striped variant="success" now={this.percFinished()} />
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                        varius blandit.</p>

                </a>
            </div>
        )

    }
}

export default TaskView;