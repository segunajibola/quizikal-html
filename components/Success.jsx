import { IoMdCheckmark } from "react-icons/io";
import React, { useState, useEffect } from "react";

export default function Success({ onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return visible ? (
    <div className="flex justify-end gap-4 bg-green-50 p-2 dark:bg-green-900/20 max-w-full">
      <div className="bg-green-100 text-green-600 p-2 rounded-full dark:bg-green-900 dark:text-green-300">
        <IoMdCheckmark className="w-5 h-5" size={10} />
      </div>
      <div className="flex-1 space-y-1">
        <h4 className="font-medium">Success!</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Result successfully uploaded to database.
        </p>
      </div>
    </div>
  ) : null;
}
