import React from "react";

class Lifecycle extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
        console.log('###########Constructor is running.........###########')
    }

    componentDidMount() {
        console.log('*********** Component Did Mount running..........**********')
    }

    shouldComponentUpdate() {
        console.log('@@@@@@@@@@@@@@ shouldComponentUpdate running..........@@@@@@@@@@@@@')
        return true;
    }

    componentDidUpdate() {
        console.log('!!!!!!!!!!!! componentDidUpdate running..........!!!!!!!!!!!!!!')
    }

    componentWillUnmount() {
        console.log('---------------Component Will Unmount -------------------')
    }

    increaseFn = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

    render() {
        console.log('&&&&&&&&&&&&&&& render is running.........&&&&&&&&&&&&&&&&&&')
        return(
            <>
                <h2>Lifecycle Methods - Class Components</h2>
                <br></br>
                <div>Counter - {this.state.count}</div>
                <br></br>

                <button onClick={this.increaseFn}>Increase</button>
            </>
        )
    }
}

export default Lifecycle;


// 4 stages - brahmcharya, grihastha, vanprastha, ...


// Lifecycle Phases - 3 stages - 
// mounting/rendering
// re-mounting / re-rendering
// unmounting


// Mounting :-
// constructor - to load all initial values / state initialisation
// render - to load jsx
// componentDidMount - runs after first render - api calling / async tasks

// Re-mounting / Re-rendering (Update in State/Props):-
// shouldComponentUpdate - to check whether component re-render is required or not
// render - to load updated jsx
// componentDidUpdate - runs after every re-render - api calling / async tasks

// Unmounting :-
// componentWillUnmount - runs just before unmounting/closing of the component

