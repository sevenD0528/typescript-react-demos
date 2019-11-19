import React, { Component } from 'react';

class TInput extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);

        this.state = {
            inputValue: '',
            textareaValue: ''
        }
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleTextareaChange(e) {
        this.setState({
            textareaValue: e.target.value
        })
    }

    render() {
        const { inputValue, textareaValue } = this.state;

        return (
            <div>
                <p>单行输入框：<input type="text" onChange={this.handleInputChange} value={inputValue}/></p>
                <p>{inputValue}</p>
                <p>多行输入框：<textarea type="text" onChange={this.handleTextareaChange} value={textareaValue}/></p>
                <p>{textareaValue}</p>
            </div>
        );
    }
}

export default TInput;