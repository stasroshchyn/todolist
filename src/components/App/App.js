import React, {Component} from 'react';

import Header from '../Header/Header';
import Form from '../Form/Form';
import List from '../List/List';
import Edit from '../Edit/Edit';

import './App.scss';

export default class App extends Component {
	state = {
		data:
			[
				{text: 'Create my first ToDo List', completed: false, id: 'qwe'},
				{text: 'Nice try', completed: false, id: 'zxc'},
				{text: 'Got it!', completed: false, id: 'iop'}
			],
		filter: 'All',
		editIsOpen: false,
		editData: ''
	}

	randomId = () => {
		return Math.random().toString(36).substr(2, 9);
	}

	itemDone = (id) => {
		this.setState(({data}) => {
			const newArr = data.map(item => {
				if (item.id === id) {
					return {...item, completed: !item.completed};
				} else {
					return item;
				}
			});
			return {data: newArr};
		});
	}

	itemDelete = (id) => {
		this.setState(({data}) => {
			const newArr = data.filter(item => item.id != id);
			return {data: newArr};
		});
	}

	itemAdd = (text) => {
		const newItem = {
			text: text,
			completed: false,
			id: this.randomId()
		}
		this.setState(({data}) => {
			const newArr = [newItem, ...data];
			return {data: newArr};
		});
	}

	checkFilter = (filter) => {
		this.setState({filter});
	}

	filterData = () => {
		const {data, filter} = this.state;

		if (filter == 'Completed') {
			return data.filter(item => item.completed == true);
		} else if (filter == 'Uncompleted') {
			return data.filter(item => item.completed == false);
		} else {
			return data;
		}
	}

	itemChange = (text) => {
		console.log(text);
	}

	openEdit = (id) => {
		const [editData] = this.state.data.filter(item => item.id == id);
		this.setState({editData: editData, editIsOpen: !this.state.editIsOpen});
	}

	closeEdit = (text, id) => {
		this.setState(({data, editIsOpen}) => {
			// const [editData] = this.state.data.filter(item => item.id == id);
			// editData.text = text;
			const index = data.findIndex(item => item.id === id);
			const newArr = [...data];

			newArr[index].text = text;
			return {data: newArr, editIsOpen: !this.state.editIsOpen}
		})
		
	}

	render() {
		
		const newData = this.filterData(),
			  {editIsOpen, editData} = this.state;

		return (
			<div className="app">
				<Header />
				<Form itemAdd={this.itemAdd}
					  checkFilter={this.checkFilter}/>
				{editIsOpen ? 
					<Edit 
						openEdit={this.openEdit}
						closeEdit={this.closeEdit}
						editData={editData} /> :
					<List
					data={newData}
					itemDone={this.itemDone}
					itemDelete={this.itemDelete}
					itemChange={this.itemChange}
					openEdit={this.openEdit} />}
			</div>
		);
	}
}











