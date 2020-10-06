import React, {Component} from 'react';

import './ListItem.scss';

class ListItem extends Component {
    


    render() {
        const {text, completed, itemDone, itemDelete, openEdit} = this.props;

        return (
            <div className="list-item">

                <div
                    className={`list-item__text ${completed ? 'list-item__text_done' : ''}`}>
                    {text}
                </div>
                <div className="list-item__buttons">
                    <button className="list-item__button list-item__button_done"
                        onClick={itemDone}>
                        <i className="fas fa-check fa-lg"></i>
                    </button>
                    <button className="list-item__button list-item__button_edit"
                        onClick={openEdit}>
                        <i className="fas fa-pencil-alt fa-lg"></i>
                    </button>
                    <button className="list-item__button list-item__button_delete"
                        onClick={itemDelete}>
                        <i className="far fa-trash-alt fa-lg"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default ListItem;