// AvatarUploader.tsx
import React, { useState } from "react";
import { Controller, type Control } from "react-hook-form";
import UploadImg from "../UploadImg";

type Props = {
  control: Control<any>;
  name: string;
};

export const AvatarUploader: React.FC<Props> = ({ control, name }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const maxSize = 500 * 1024;

  const handleFileChange = (
    file: File | null,
    onChange: (file: File | null) => void,
  ) => {
    if (file) {
      if (file.size > maxSize) {
        setError("File too large. Please upload a photo under 500KB");
        onChange(null);
        setPreview(null);
        return;
      }
      setError("");
      onChange(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setError("");
      onChange(null);
      setPreview(null);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <div className="flex flex-col gap-2">
          <p className="font-medium text-stone-50">Upload avatar</p>
          <div className="flex h-24 w-[450px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 p-4">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="h-10 w-10 rounded-lg object-cover shadow-md"
              />
            ) : (
              <span className="text-gray-500">
                <UploadImg />
              </span>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              id="avatarInput"
              onChange={(e) =>
                handleFileChange(e.target.files?.[0] ?? null, onChange)
              }
            />
            <div className="mt-2 flex">
              <label
                htmlFor="avatarInput"
                className="mx-2 cursor-pointer rounded-lg bg-[#403E5A] p-1 text-gray-200 hover:underline"
              >
                {preview ? "Change Image" : "Click to upload image"}
              </label>
              {preview && (
                <button
                  type="button"
                  className="mx-2 rounded-lg bg-[#403E5A] p-1 text-gray-200 hover:underline"
                  onClick={() => handleFileChange(null, onChange)}
                >
                  Remove Image
                </button>
              )}
            </div>
          </div>
          {error && <p className="mb-1 text-sm text-[#F57463]">{error}</p>}
        </div>
      )}
    />
  );
};
