import './App.css';
import { Button } from './components/Button'
import { ShareIcon } from './icons/ShareIcon'


function App() {

  return (
    <>
      <Button variant="primary" text="Share" startIcon={<ShareIcon />}/>
    </>
  )
}

export default App
