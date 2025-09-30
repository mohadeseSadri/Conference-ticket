// AvatarUploader.tsx
import { useState } from "react";
import { Controller, type Control } from "react-hook-form";
import UploadImg from "../UploadImg";

type Props = {
  control: Control<any>;
  name: string;
};

export function AvatarUpload({ control, name }: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (
    file: File | null,
    onChange: (file: File | null) => void,
  ) => {
    if (file) {
      onChange(file);
      setPreview(URL.createObjectURL(file));
    } else {
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
            if (!file) return "Please upload image";
            if (file.size > 500 * 1024)
              return "File too large. Please upload a photo under 500KB";
            return true;
          },
        }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <div className="flex flex-col gap-2">
            <label className="mt-2 font-medium text-stone-50">Upload avatar</label>
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

              <div className="mt-1 flex-col">
                {preview ? (
                  <>
                    <section className="mb-2 flex items-center justify-center">
                      <img
                        src={preview}
                        alt="Preview"
                        className="flex h-10 w-10 rounded-lg object-cover"
                      />
                    </section>

                    <section className="flex">
                      <label
                        htmlFor="avatarInput"
                        className="mx-2 cursor-pointer rounded-lg bg-[#403E5A] px-1 text-gray-200 hover:underline"
                      >
                        Change Image
                      </label>
                      <button
                        type="button"
                        className="mx-2 rounded-lg bg-[#403E5A] px-1 text-gray-200 hover:underline"
                        onClick={() => handleFileChange(null, onChange)}
                      >
                        Remove Image
                      </button>
                    </section>
                  </>
                ) : (
                  <>
                    <section className="mb-2 flex items-center justify-center">
                      <UploadImg />
                    </section>

                    <label
                      htmlFor="avatarInput"
                      className="cursor-pointer rounded-lg bg-[#403E5A] px-1 text-gray-200 hover:underline"
                    >
                      Click to upload image
                    </label>
                  </>
                )}
              </div>
            </div>
            {error && <p className="text-sm text-[#E97464]">{error.message}</p>}
          </div>
        )}
      />
    </>
  );
}
