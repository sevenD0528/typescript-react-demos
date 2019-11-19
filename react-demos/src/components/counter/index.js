import React from 'react'

import Sub from "./subcomp";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log('component did mount');
    }

    handleClick(e) {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return ( 
            <div>
                <div> { this.state.count } </div>
                <Sub number={this.state.count}></Sub>
                <button onClick = { this.handleClick } >
                    更新 
                </button> 
            </div>
        )
    }
}

export default Counter;