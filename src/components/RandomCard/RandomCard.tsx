import React, {ReactNode} from 'react';

interface Data {[key: string]: any}
interface Props {
  data: Data[],
  render: (data: Data) => ReactNode
}

export const RandomCard: React.FC<Props> = (props) => {
  const dataKeys = Object.keys(props.data);
  const [randomIndex, setRandomIndex] = React.useState(0);
  const [timer, setTimer] = React.useState<any>();
  const intervalCallback = () => {
    setRandomIndex(Math.floor(Math.random() * dataKeys.length))
  }
  const stopTimer = () => {
    clearInterval(timer)
  }
  const startTimer = () => {
    setTimer(setInterval(intervalCallback));
  }
  React.useEffect(() => {
    startTimer()
    return () => {
      stopTimer()
    }
  }, [])
  return (
    <div onClick={stopTimer}>
      {
        props.render(props.data[randomIndex])
      }
    </div>
  )
}
