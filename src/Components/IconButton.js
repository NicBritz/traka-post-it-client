import { BiCommentAdd } from "react-icons/bi";

const IconButton = ({ color = "green", text = "text", handler }) => {
  let buttonColor;
  if (color === "green") buttonColor = "text-green-500";
  if (color === "blue") buttonColor = "text-blue-700";
  if (color === "red") buttonColor = "text-red-600";
  if (color === "orange") buttonColor = "text-orange-500";

  return (
    <button
      className={`text-sm ${buttonColor} flex gap-1 items-center active:opacity-50`}
      name={`${text} button`}
      onClick={() => handler()}
      data-testid={`${text} button`}
    >
      <BiCommentAdd className="h-4 w-4" />
      <span className="font-bold">{text}</span>
    </button>
  );
};

export default IconButton;
