import { CrossIcon } from "../icons/CrossIcon";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateContentModal = ({ open, onClose }: ModalProps) => {
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

            <Input placeholder={"Give a Title"} />
            <Input placeholder={"Paste URL here..."} />

            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                // Replace with your actual submission handler
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
  // onChange: void;
}

const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      // onChange={props.onChange}
      className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};
