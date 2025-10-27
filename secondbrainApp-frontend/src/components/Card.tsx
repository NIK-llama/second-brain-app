import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = (props: CardProps) => {
  return (
    <div className="p-4 bg-white rounded-md border border-gray-300 max-w-72">
      <div className="flex justify-between">
        <div className="flex items-center text-md">
          <div className="pr-4 text-gray-500">
            <ShareIcon />
          </div>
          {props.title}
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <a href={props.link} target="blank">
              <ShareIcon />
            </a>
          </div>
          <div className="text-gray-500">
            <ShareIcon />
          </div>
        </div>
      </div>

      <div className="pt-4">
        {props.type === "youtube" && (
          <iframe
            className="relative w-full overflow-hidden rounded-lg aspect-video"
            src={props.link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {props.type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={props.link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
