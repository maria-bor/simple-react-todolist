import React, { Component } from 'react'
import TodoItems from '../TodoItems/TodoItems'
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(e) {
        var itemArray = this.state.items

        if (this.inputElement.value != "") {
            itemArray.unshift({
                text: this.inputElement.value,
                key: Date.now()
            })
            this.setState({
                items: itemArray
            })

            this.inputElement.value = ""
        }

        e.preventDefault()
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        })
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="todoList">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input
                            ref={(a) => this.inputElement = a}
                            placeholder="Enter task" />
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems
                    entries={this.state.items}
                    delete={this.deleteItem} />
            </div>
        )
    }
}
export default TodoList