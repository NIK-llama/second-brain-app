import './App.css';
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon'


function App() {

  return (
    <>
      <Button variant="primary" text="Share" startIcon={<ShareIcon />}/>
      <br />
      <Button variant="primary" text="Add" startIcon={<PlusIcon />}/>
    </>
  )
}

export default App
