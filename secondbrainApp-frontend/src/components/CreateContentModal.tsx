export const CreateContentModal = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-20 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full transform transition-all">
                <div className="flex justify-end">

                </div>
            </div>
        </div>
      )}
    </div>
  );
};
