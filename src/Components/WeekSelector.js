import React, {Component} from 'react';

class WeekSelector extends Component{
    constructor(props) {
        super(props);
        this.state = {
            week: props.week
        }
    }

    getDateOfWeek(week, y) {
        const d = new Date("Jan 01, " + y + " 01:00:00");
        const dayMs = (24 * 60 * 60 * 1000);
        const offSetTimeStart = dayMs * (d.getDay() - 1);
        const w = d.getTime() + 604800000 * (week - 1) - offSetTimeStart; //reducing the offset here
        const n1 = new Date(w);
        const n2 = new Date(w + 518400000);
        return {
            dateFrom: n1,
            dateTo: n2
        }
    }

    getShortString(date) {
        return date.getUTCDate() + "." + (date.getUTCMonth() + 1) + ".";
    }

    handlePlus(e) {
        this.setState({week: this.state.week + 1 })
    }

    handleMinus(e) {
        this.setState({week: this.state.week - 1 })
    }

    render() {
        const weekDays = this.getDateOfWeek(this.state.week, 2019);
        return (
            <div className="well output">
                <button type="button" className="btn btn-primary" onClick={this.handleMinus.bind(this)}>-</button>
                {"Woche " + this.state.week + " - " + this.getShortString(weekDays.dateFrom) + "-" + this.getShortString(weekDays.dateTo)}
                <button type="button" className="btn btn-primary" onClick={this.handlePlus.bind(this)}>+</button>
            </div>
        )

    }
}

export default WeekSelector;