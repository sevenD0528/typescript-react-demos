import React, { Component } from 'react';


class TButton extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        color: 'blue',
        text: 'Confirm'
    }

    render() {
        const { color, text } = this.props;

        return (
            <button className={`btn btn-${color}`}>
                <em>{text}</em>
            </button>
        )
    }
}
// const TButton = React.createClass({
//   getDefaultProps() {
//     return {
//       color: 'green',
//       text: 'Confirm'
//     }
//   }
// })

export default TButton;