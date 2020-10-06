import React, {Component} from 'react';

import './Filter.scss';

class Filter extends Component {

    catchFilter = (e) => {
        const filter = e.target.value;
        this.props.checkFilter(filter);        
    }

    render() {
        return (
            <select onChange={this.catchFilter}>
                <option>All</option>
                <option>Completed</option>
                <option>Uncompleted</option>
            </select>
        )
    }
}

export default Filter;