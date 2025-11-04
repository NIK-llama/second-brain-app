import "../App.css";
import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";


export const DashBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contents = useContent();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Sidebar />
      <div className="p-4 font-sans ml-64 min-h-screen bg-gray-100">
        <CreateContentModal open={isModalOpen} onClose={closeModal} />

        <div className="flex justify-end gap-4">
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
          <Button
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
            onClick={openModal}
          />
        </div>
        <div className="flex gap-4 items-start">
          {contents.map(({ _id,type, link, title }) => (
            <Card
              key={_id}
              title={title}
              link={link}
              type={type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
