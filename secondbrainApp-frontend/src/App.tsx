import './App.css';
import { Button } from './components/Button'
import { Card } from './components/Card';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon'


function App() {

  return (
    <>
      <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}/>
      <br />
      <Button variant="primary" text="Add Content" startIcon={<PlusIcon />}/>
      <Card />
    </>
  )
}

export default App
