import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function CopyText({ text, children }) {
  const [tooltipText, setTooltipText] = useState(`${text}`);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setTooltipText(`Copied: ${text}`);
      setTimeout(() => setTooltipText(`${text}`), 2000);
    } catch {
      setTooltipText("Failed to copy");
      setTimeout(() => setTooltipText(`${text}`), 2000);
    }
  };

  return (
    <div
      onClick={handleCopy}
      data-tooltip-id="copyTip"
      data-tooltip-content={tooltipText}
      className="cursor-pointer"
    >
      {children}
      <Tooltip
        id="copyTip"
        place="top"
        effect="solid"
        className="!bg-red-950 !text-lg"
      />
    </div>
  );
}
