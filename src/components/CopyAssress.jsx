import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCheck } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

const CopyAddress = ({ address }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [copied]);

  return (
    <div>
      <div className="flex items-center justify-center gap-4 md:gap-7 mx-auto bg-white shadow-xl shadow-red-950 py-3 px-7 rounded-full mb-9 md:mb-12">
        <h1 className="text-xs md:text-lg text-black font-semibold ">
          0x0ZSJA7A9D9S9AS8S7HBBS8S7S7888
        </h1>
        <CopyToClipboard text={address} onCopy={() => setCopied(true)}>
          <IoCopyOutline className="text-xl md:text-4xl text-red-500 cursor-pointer" />
        </CopyToClipboard>
      </div>

      {copied && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-red-600 py-3 px-10 z-50 border-rounded">
          <h1 className="text-white font-bold text-2xl">Copied</h1>
          <FaCheck size={25} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default CopyAddress;
