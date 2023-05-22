import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Spinner from './Loaders/Spinner/Spinner'

function App() {
  const navigation = useNavigation()

  return (
    <div className="App">
      <Header></Header>
      {navigation.state === 'loading' && <Spinner/>}
      <Outlet/>
    </div>
  )
}

export default App
