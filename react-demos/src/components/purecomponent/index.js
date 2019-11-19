import React from 'react'

class Pure extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            numbers: [1, 2, 3, 4]
        }
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log('component did mount');
    }

    handleClick(e) {
        const numbers = this.state.numbers;

        numbers.push(numbers.length + 1);
        console.log('numbers', numbers);
        console.log('state numbers', this.state.numbers);
        this.setState({
            numbers: numbers
        })
    }

    render() {
        return ( 
            <div>
                <button onClick = { this.handleClick } >
                    更新 
                </button>
                { this.state.numbers.map(item => <div key={item}>{item}</div>) }
            </div>
        )
    }
}

export default Pure;