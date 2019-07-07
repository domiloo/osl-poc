import React, {Component} from 'react';
import TaskView from "./TaskView";

class TaskList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            week: props.week,
            fach: props.fach,
            taskList: props.tasks
        }
    };



    render() {
        if (this.state.taskList) {
            const listItems = this.state.taskList.map((task) =>
                <TaskView task={task} key={task.id}/>
            );
            return (

                <div className="list-group">
                    <h2>{this.state.fach}</h2>
                    {listItems}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default TaskList;