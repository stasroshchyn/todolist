import React, {Component} from 'react';

import ListItem from '../List-Item/ListItem';

import './List.scss';

class List extends Component {
    
    render() {
        const {data, itemDone, itemDelete, itemChange, openEdit} = this.props;

        return (
            <div className="list">
                {data.map(item => {
                    const {id, ...ItemData} = item;
                    return(
                        <ListItem
                            key={id}
                            {...ItemData}
                            itemDone={() => itemDone(id)}
                            itemDelete={() => itemDelete(id)}
                            itemChange={() => itemChange(id)}
                            openEdit={() => openEdit(id)} />
                    )
                })}
            </div>
        );
    }
}

export default List;