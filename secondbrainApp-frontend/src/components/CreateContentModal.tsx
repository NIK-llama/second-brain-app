import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

//@ts-ignore
enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateContentModal = ({ open, onClose }: ModalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  const addContent = async () => {
    const title = titleRef.current?.value.trim();
    const link = linkRef.current?.value.trim();

    if (!title || !link) {
      alert("Please fill in both title and link.");
      return;
    }

    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          title,
          link,
          type,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      alert("Content added successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to add content. Please try again.");
    }
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full transform transition-all">
            <div className="flex justify-end cursor-pointer" onClick={onClose}>
              <CrossIcon />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Create New Content
            </h2>
            <p className="text-gray-600 mb-6">
              Enter the link to the Twitter post or YouTube video you want to
              save.
            </p>

            <Input reference={titleRef} placeholder={"Give a Title"} />
            <Input reference={linkRef} placeholder={"Paste URL here..."} />

            <div>
              <h1>Type</h1>
              <div className="flex gap-1 p-4">
                <Button
                  text="Youtube"
                  variant={
                    type === ContentType.Youtube ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Youtube);
                  }}
                />

                <Button
                  text="Twitter"
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Twitter);
                  }}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={addContent}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Add Content
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface InputProps {
  placeholder: string;
  reference?: any;
}

const Input = (props: InputProps) => {
  return (
    <input
      ref={props.reference}
      type="text"
      placeholder={props.placeholder}
      className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};
