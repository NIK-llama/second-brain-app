import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div className="p-4">
      <CreateContentModal open={true}/>
      <div className="flex justify-end gap-4">
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />} />
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
      </div>
      <div className="flex gap-4 items-start">
        <Card
          title="Tweet"
          link="https://x.com/_JohnHammond/status/1964365840997843289"
          type="twitter"
        />
        <Card
          title="Python Project"
          link="https://www.youtube.com/watch?v=Wif4zLlruqo"
          type="youtube"
        />
      </div>
    </div>
  );
}

export default App;
