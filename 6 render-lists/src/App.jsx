import Lists from "./Lists"

function App() {
  const MAANG = [{ name: "Meta", marketCapInBil: 1270, revenueInBil: 134.9 },
  { name: "Apple", marketCapInBil: 2720, revenueInBil: 383.29 },
  { name: "Amazon", marketCapInBil: 1830, revenueInBil: 574.8 },
  { name: "Netflix", marketCapInBil: 269, revenueInBil: 33.7 },
  { name: "Google", marketCapInBil: 1830, revenueInBil: 307.4 },
  ]

  const WITCH = [{ name: "Wipro", marketCapInLCrs: 2.62, revenueInLCrs: 0.90 },
  { name: "Infosys", marketCapInLCrs: 6.43, revenueInLCrs: 1.53 },
  { name: "TCS", marketCapInLCrs: 14.40, revenueInLCrs: 2.38 },
  { name: "HCL", marketCapInLCrs: 4.34, revenueInLCrs: 1.08 },
  { name: "LTIMindtree", marketCapInLCrs: 1.52, revenueInLCrs: 0.35 },
  { name: "TechMahindra", marketCapInLCrs: 1.25, revenueInLCrs: 0.52 },
  ]

  const color= {display: 'flex'}


  return (
    <div style={color}>
      <Lists companies={MAANG} category="MAANG" />
      <Lists companies={WITCH} category="WITCH" />
      <Lists companies={MAANG} category="WITCH" />

    </div>
  )
}

export default App
