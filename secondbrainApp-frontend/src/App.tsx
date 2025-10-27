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
      <Card title="Python Project" link="https://www.youtube.com/watch?v=Wif4zLlruqo" type="youtube" />
      <Card title="Tweet" link="https://x.com/_JohnHammond/status/1964365840997843289" type="twitter" />
    </>
  )
}

export default App
