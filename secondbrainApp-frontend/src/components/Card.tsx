import { ShareIcon } from "../icons/ShareIcon";

export const Card = () => {
  return (
    <div className="p-4 bg-white rounded-md border border-gray-300 max-w-72">
      <div className="flex justify-between">
        <div className="flex items-center text-md">
          <div className="pr-4 text-gray-500">
            <ShareIcon />
          </div>
          Project name
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <ShareIcon />
          </div>
          <div className="text-gray-500">
            <ShareIcon />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <iframe
           className="w-full"
          src="https://www.youtube.com/embed/Wif4zLlruqo?si=Yr5XFIjeN5CAojlq"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
