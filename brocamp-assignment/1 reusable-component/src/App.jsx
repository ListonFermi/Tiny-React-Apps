import Component1 from "./Component"

function App() {
  const data =[
    { id:1, name: 'Leanne Graham', email: 'leannegraham@abc.com'},
    { id:2, name: 'Ervin', email: 'ervinhowell@abc.com'}
  ]

  return <Component1 data={data} />
}

export default App
