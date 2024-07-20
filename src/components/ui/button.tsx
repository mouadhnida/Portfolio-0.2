import React from "react";

export default function Button({
  buttonText,
  className,
}: {
  buttonText: string;
  className?: string;
}) {
  return (
    <div className={`w-fit rounded-md p-4 ${className} bg-black font-semibold`}>
      {buttonText}
    </div>
  );
}
