export default function CopyText({ text, children }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copied:", text);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div onClick={handleCopy} className=" appearance-none  cursor-pointer">
      {children}
    </div>
  );
}
