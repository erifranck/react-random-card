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
  const [hasStarted, setStarted] = React.useState<boolean>();

  const intervalCallback = React.useCallback(() => {
    setRandomIndex(Math.floor(Math.random() * dataKeys.length))
  }, [dataKeys])

  const toogleTimer = React.useCallback(() => {
    if(hasStarted) {
      setStarted(false)
      clearInterval(timer)
    } else {
      setStarted(true)
      setTimer(setInterval(intervalCallback));
    }
  }, [hasStarted, timer, intervalCallback])
  React.useEffect(() => {
    toogleTimer()
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div onClick={toogleTimer} style={{cursor: 'pointer'}}>
      {
        props.render(props.data[randomIndex])
      }
    </div>
  )
}
