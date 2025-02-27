import ClassicComponent from "./ClassicComponentCounter"
import CounterUseReducer from "./CounterUseReducer"
import CounterUseState from "./CounterUseState"

function App() {
  return (
    <>
      <p>ClassicComponent: <ClassicComponent initialCount={0} /></p>
      <p>CounterUseReducer: <CounterUseReducer initialCount={0} /></p>
      <p>CounterUseState: <CounterUseState initialCount={0} /></p>
    </>
  )
}

export default App
