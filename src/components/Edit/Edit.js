import React, {Component} from 'react';

import './Edit.scss';

class Edit extends Component {

    state = {
        text: this.props.editData.text
    }
    
    catchText = (e) => {
        this.setState({text: e.target.value});
    }

    pressConfirm = (e) => {
        e.preventDefault();
        this.props.closeEdit(this.state.text, this.props.editData.id);
    }

    render() {
        const {editData} = this.props;

        return (
            <div className="edit">
                <input defaultValue={editData.text} onChange={this.catchText}></input>
                <button onClick={this.pressConfirm}>Confirm</button>
            </div>
        );
    }
}

export default Edit;