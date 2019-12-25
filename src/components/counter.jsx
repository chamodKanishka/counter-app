import React, { Component } from 'react';

class Counter extends Component{
    state = {
        count: 0,
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count +1});
    }
    handleDecrement = product => {
        console.log(product);
        this.setState({ count: this.state.count -1});
    }


    render() {
        return(
            <div>
                <button
                    onClick={() => this.handleIncrement(this.product)}
                    className="btn btn-secondary btn-sm">
                    +
                </button>
                <span className={ this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.handleDecrement(this.product)}
                    className="btn btn-secondary btn-sm">
                    -
                </button>

        </div>
    );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){

        const { count } = this.state;
        return this.state.count === 0 ? 'Zero' : count;
    }
}

export default Counter;
