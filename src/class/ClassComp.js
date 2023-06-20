import React from "react";

class ClassComp extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            // status: false,
            // name: 'test'
        }
    }

    increaseFn = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

    decreaseFn = () => {
        this.setState({
            ...this.state,
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <>
                <h2>Counter - Using Class Component</h2>

                <div>Counter - {this.state.count}</div>
                <br></br>

                <button onClick={this.increaseFn}>Increase</button>
                <button onClick={this.decreaseFn}>Decrease</button>
            </>
        )
    }
}

export default ClassComp