import { Component } from "react";

interface ClassicComponentCounterState {
    count: number;
}

interface ClassicComponentCounterProps {
  initialCount: number;
}

export default class ClassicComponentCounter extends Component<ClassicComponentCounterProps, ClassicComponentCounterState> {
    constructor(props: ClassicComponentCounterProps) {
        super(props);
        this.state = {
          count: props.initialCount
        };
      }

      increment() {
        return () => this.setState({...this.state, count: this.state.count + 1});
      }

      render() {
        return  (
          <div>
            <label data-testid="count-label-usestate">Count: {this.state.count}</label>
            <button data-testid="increment-button-usestate" onClick={this.increment()}>
              Increment
            </button>
          </div>
        );
      }
}
