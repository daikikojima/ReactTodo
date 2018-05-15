import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddTodo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "",
            detail: ""
        }
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeDetail = this.onChangeDetail.bind(this)
        this.onRegister = this.onRegister.bind(this)
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeDetail(e) {
        this.setState({
            detail: e.target.value
        })
    }

    onRegister() {
        this.props.addTodo({
            title: this.state.title,
            detail: this.state.detail
        })
        this.setState({
            title: "",
            detail: ""
        })
    }

    render() {
        return (
            <div>
                <h2>AddTodo</h2>
                <label>
                    Title:
                    <input type = "text" placeholder="Enter title" value = {this.state.title} onChange= {this.onChangeTitle} />
                </label>
                <label>
                    Detail:
                    <input type = "text" label = "Detail" placeholder="Enter detail" value = {this.state.detail} onChange = {this.onChangeDetail} />
                </label>
                <button onClick={this.onRegister}>登録</button>
            </div>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func,
}

export default AddTodo