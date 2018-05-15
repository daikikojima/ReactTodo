import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
    deleteButton(i) {
        this.props.delete(i)
    }
    render() {
        return (
            <div>
                <h2>List</h2>
                <ul>
                    {this.props.props.todos.map((todo, i) => <li key={i}>{todo.title} : {todo.detail}<button onClick={() => this.deleteButton(i)}>削除</button></li>)}
                </ul>
            </div>
        )
    }
}

List.propTypes = {
    delete: PropTypes.func
}

export default List