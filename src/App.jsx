
// import { CurrencyConverter } from '../components/CurrencyConverter'
import { SearchList } from '../src/components/SearchList'
import { itemsList } from './data/data'
import './App.css'
import { List } from './components/ejercicioElevandoEstado/List'

function App() {

  return (
    <div className="App">
      {/* <h2>Conversor de moneda</h2>
      <CurrencyConverter /> */}
     <SearchList list={itemsList} /> 
     {/* < List /> */}
    </div>
  )
}

export default App
