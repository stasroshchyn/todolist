import React, {Component} from 'react';

import Input from '../Input/Input';
import Filter from '../Filter/Filter';

import './Form.scss';

class Form extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {itemAdd, checkFilter} = this.props;

        return (
            <div className="form">
                <Input itemAdd={itemAdd} />
                <Filter checkFilter={checkFilter} />
            </div>
        );
    }
}

export default Form;