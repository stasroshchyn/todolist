import React, {Component} from 'react';

import './Input.scss';

class Input extends Component {
    
    state = {
        text: ''
    }

    catchText = (e) => {
        this.setState({text: e.target.value});
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.text.length != 0) {
            this.props.itemAdd(this.state.text);
        }
        this.state.text = '';
    }

    render() {
        
        return (
            <div className="input">
                <form>
                    <input value={this.state.text} autoComplete="off" name="input" onChange={this.catchText}></input>
                    <button onClick={this.add}><i class="fas fa-plus fa-lg"></i></button>
                </form>
            </div>
        )
    }
}

export default Input;