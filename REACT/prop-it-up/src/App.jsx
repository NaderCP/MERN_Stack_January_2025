import PersonCard from './components/PersonCard'
import './App.css'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <PersonCard firstName="Doe"  lastName= "Jane" age= {45}  hairColor= "Black"/>
      <PersonCard firstName="Smith"  lastName= "Jhon" age= {88}  hairColor= "Brown"/>
      <PersonCard firstName="Fillmore"  lastName= "Millard" age= {50}  hairColor= "Brown"/>
      <PersonCard firstName="Smith"  lastName= "Maria" age= {62}  hairColor= "Brown"/>
    </>
  )
}

export default App
