import { MdReply, MdAddComment, MdDelete, MdEdit } from "react-icons/md";

const IconButton = ({ color = "green", text = "text" }) => {
  let buttonColor;
  let icon;
  if (color === "green") buttonColor = "text-green-500";
  if (color === "blue") buttonColor = "text-blue-700";
  if (color === "red") buttonColor = "text-red-600";
  if (color === "orange") buttonColor = "text-orange-500";

  if (text === "reply") icon = <MdReply className="h-4 w-4" />;
  if (text === "post") icon = <MdAddComment className="h-4 w-4" />;
  if (text === "delete") icon = <MdDelete className="h-4 w-4" />;
  if (text === "edit") icon = <MdEdit className="h-4 w-4" />;

  return (
    <div
      className={`text-sm ${buttonColor} flex gap-1 items-center active:opacity-50`}
      name={`${text} button`}
      data-testid={`${text} button`}
    >
      {icon}
      <span className="font-bold">{text}</span>
    </div>
  );
};

export default IconButton;
