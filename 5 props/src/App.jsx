import Cricketers from "./Cricketers"

function App() {
  return (
    <>
      <Cricketers name="Dhoni" role="Wicket Keeper(C)" position="4/5/6/7" isCapped={true} />
      <Cricketers name="Jadeja" role="All-Rounder" position="5/6/7" isCapped={true} />
      <Cricketers name="Ruturaj" role="Batsman" position={1} isCapped={true} />
      <Cricketers />
    </>
  )
}

export default App
