import React, {ReactNode} from 'react';

interface Data {[key: string]: any}
interface Props {
  data: Data[];
  onStop?: (selected?: any) => void;
  blockStop?: boolean;
  render: (data: any) => ReactNode;
}
interface State {
  timer?: any;
  hasStarted: boolean;
  randomIndex: number;
}

export class RandomCard extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      randomIndex: 0,
      hasStarted: false
    }
  }
  componentDidMount() {
    this.toogleTimer()
  }
  componentWillUnmount() { 
    clearInterval(this.state.timer)
  }
  intervalCallback = () => {
    const dataKeys = Object.keys(this.props.data);
    this.setState({ 
      randomIndex: Math.floor(Math.random() * dataKeys.length)
    })
  }
  toogleTimer = () => {
    const {hasStarted, timer, randomIndex} = this.state;
    const {data, blockStop, onStop} = this.props;
    if(hasStarted) {
      if (blockStop) return;
      this.setState({hasStarted: false})
      clearInterval(timer)
      if (onStop) {
        onStop(data[randomIndex])
      }
    } else {
      this.setState({hasStarted: true})
      this.setState({ timer: setInterval(this.intervalCallback) });
      if (onStop) {
        onStop()
      }
    }
  }
  render () {
    const {randomIndex} = this.state;
    const {render, data} = this.props;
    return (
      <div onClick={this.toogleTimer} style={{cursor: 'pointer'}}>
        {
          render(data[randomIndex])
        }
      </div>
    )
  }
}
