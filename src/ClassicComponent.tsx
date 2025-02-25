import { ChangeEvent, Component } from "react";

interface ClassicComponentState {
    count: number;
    message: string;
    intervalId?: number;
    secondsNumber: number;
}

interface ClassicComponentProps {
    initialCount: number;
    secondsNumber: number;
}

export default class ClassicComponent extends Component<ClassicComponentProps, ClassicComponentState> {
    constructor(props: ClassicComponentProps) {
        super(props);
        this.state = {
          count: props.initialCount,
          message: 'Component constructed',
          secondsNumber: props.secondsNumber
        };
      }

      componentDidMount() {
        console.log('Class Component: componentDidMount');
        const intervalId = setInterval(() => {
            this.setState({ ...this.state, count: this.state.count + 1 });
          }, 3 * 1000);
          this.setState({ ...this.state, message: 'Component mounted', intervalId });
      }
    
      componentWillUnmount() {
        console.log('Class Component: componentWillUnmount');
        clearInterval(this.state.intervalId);
      }

      messageChangeHandler() {
        return (e: ChangeEvent<HTMLInputElement>) => this.setState({...this.state, message: e.target.value});
      }

      secondsNumberChangeHandler() {
        return (e: ChangeEvent<HTMLInputElement>) => {
            clearInterval(this.state.intervalId);
            const intervalId = setInterval(() => {
                this.setState({ ...this.state, count: this.state.count + 1 });
              }, 3 * 1000);
            this.setState({...this.state, intervalId, secondsNumber: parseInt(e.target.value || '1')});
        }
      }

      render() {
        console.log('Class Component: render');
        return (
          <div>
            <h2>Class Component</h2>
            <p>Count: {this.state.count}</p>
            <p>Message: <input value={this.state.message} onChange={this.messageChangeHandler()}/></p>
            <p>Seconds number: <input value={this.state.secondsNumber} onChange={this.secondsNumberChangeHandler()}/></p>
          </div>
        );
      }
}
