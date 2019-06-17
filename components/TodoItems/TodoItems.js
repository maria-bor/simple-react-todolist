import React, { Component } from 'react'
import './TodoItems.css'

class TodoItems extends Component {
    constructor(props) {
        super(props)

        this.createTask = this.createTask.bind(this)
        this.delete = this.delete.bind(this)
    }

    createTask(item) {
        return <li
            onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key)
    }

    render() {
        var todoEntries = this.props.entries
        var listItems = todoEntries.map(this.createTask)
        return (
            <ul className="theList">{listItems}</ul>
        )
    }
}

export default TodoItems