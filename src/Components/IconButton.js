import { BiCommentAdd } from "react-icons/bi";

const IconButton = ({ color = "green", text = "text", handler }) => {
  let buttonColour;
  if (color === "green") buttonColour = "text-green-500";
  if (color === "blue") buttonColour = "text-blue-700";
  if (color === "red") buttonColour = "text-red-600";
  if (color === "orange") buttonColour = "text-orange-500";

  return (
    <button
      className={`text-sm ${buttonColour} flex gap-1 items-center active:opacity-50`}
      name={`${text} button`}
      onClick={() => handler()}
    >
      <BiCommentAdd className="h-4 w-4" />
      <span className="font-bold">{text}</span>
    </button>
  );
};

export default IconButton;
