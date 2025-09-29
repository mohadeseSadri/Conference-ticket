// AvatarUploader.tsx
import React, { useState } from "react";
import { Controller, type Control } from "react-hook-form";
import UploadImg from "../UploadImg";

type Props = {
  control: Control<any>;
  name: string;
};

export function AvatarUpload({ control, name }: Props) {
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
    <>
      <Controller
        control={control}
        name={name}
        rules={{
          validate: (file: File | null) => {
            if (!file) return "Click to upload image";
            if (file.size > 500 * 1024)
              return "File too large. Please upload a photo under 500KB";
            return true;
          },
        }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <div className="flex flex-col gap-2">
            <label className="font-medium text-stone-50">Upload avatar</label>
            <div className="flex h-24 w-[450px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 p-4">
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                id="avatarInput"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  onChange(file);
                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  } else {
                    setPreview(null);
                  }
                }}
              />

              <div className="mt-2 flex">
                <label
                  htmlFor="avatarInput"
                  className="mx-2 cursor-pointer rounded-lg bg-[#403E5A] p-1 text-gray-200 hover:underline"
                >
                {preview ? "Change Image" : "Click to upload image"}
                </label>
                {preview && (
                  <>
                  <img
                  src={preview}
                  alt="Preview"
                  className="mt-2 h-10 w-10 rounded-lg object-cover"
                />
                  <button
                    type="button"
                    className="mx-2 rounded-lg bg-[#403E5A] p-1 text-gray-200 hover:underline"
                    onClick={() => handleFileChange(null, onChange)}
                  >
                    Remove Image
                  </button>
                  </>)}
              </div>

              {error && <p className="text-sm text-red-500">{error.message}</p>}
            </div>
          </div>
        )}
      />
    </>

    // <Controller
    //   name={name}
    //   control={control}
    //   rules={{
    //     validate: (file: File | null) => {
    //     <div className="flex flex-col gap-2">
    //       <p className="font-medium text-stone-50">Upload avatar</p>
    //       <div className="flex h-24 w-[450px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 p-4">
    //         {preview ? (
    //           <img
    //             src={preview}
    //             alt="Preview"
    //             className="h-10 w-10 rounded-lg object-cover shadow-md"
    //           />
    //         ) : (
    //           <span className="text-gray-500">
    //             <UploadImg />
    //           </span>
    //         )}
    //         <input
    //           type="file"
    //           accept="image/png, image/jpeg"
    //           className="hidden"
    //           id="avatarInput"
    //           onChange={(e) =>
    //             handleFileChange(e.target.files?.[0] ?? null, onChange)
    //           }
    //         />
    //         <div className="mt-2 flex">
    //           <label
    //             htmlFor="avatarInput"
    //             className="mx-2 cursor-pointer rounded-lg bg-[#403E5A] p-1 text-gray-200 hover:underline"
    //           >
    //             {preview ? "Change Image" : "Click to upload image"}
    //           </label>
    //           {preview && (
    //             <button
    //               type="button"
    //               className="mx-2 rounded-lg bg-[#403E5A] p-1 text-gray-200 hover:underline"
    //               onClick={() => handleFileChange(null, onChange)}
    //             >
    //               Remove Image
    //             </button>
    //           )}
    //         </div>
    //       </div>
    //       {error && <p className="mb-1 text-sm text-[#F57463]">{error}</p>}
    //     </div>
    //   )}
    // />
  );
}
