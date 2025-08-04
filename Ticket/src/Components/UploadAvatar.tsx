import { useState } from "react";
import Upload from "../assets/Images/icon-upload.svg";
import Info from "../assets/Images/icon-info.svg";

function UploadAvatar() {
  const [image, setImage] = useState<string | null>(null);
  const [draggedFiles, setDraggedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleImageUplod = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setDraggedFiles((prevFiles) => [...prevFiles, ...files]);
    if (files.length > 0) {
      validateFile(files[0]);
    }
    if (files[0] && files[0].type.startsWith("image/")) {
      setImage(URL.createObjectURL(files[0]));
    } else {
      setImage(null);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const validateFile = (file: { size: number; type: string }) => {
    setError("");
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      setError("Only JPEG, PNG and GIF files are allowed.");
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setError("File size must be less than 2MB.");
      return;
    }
  };

  const clearFiles = () => {
    setImage(null);
    setDraggedFiles([]);
  };

  const changeImage = () => {
    setImage(null);
    setDraggedFiles([]);
  };

  return (
    <>
      <div className="display:inline-block; position: relative">
        <div className="flex items-center justify-center mt-7">
          <div>
            <div>
              <p>Upload Avatar</p>
            </div>

            <div
              className="flex items-center justify-center mt-2"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className="pt-4 px-20 border-2 border-dashed border-gray-500 cursor-pointer border-raduce rounded-lg">
                <div className="flex items-center justify-center">
                  {image ? (
                    <img
                      src={image}
                      alt="Change Avatar"
                      className="w-10 h-10 border-2 border-gray-500 border-raduce rounded-lg"
                    />
                  ) : (
                    <img
                      src={Upload}
                      alt="Upload"
                      className="bg-gray-800 border-raduce rounded-lg p-1"
                    />
                  )}
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    {image ? (
                      ""
                    ) : (
                      <>
                        <p className="text-xl font-medium text-gray-700">
                          Drag and drop your files here
                        </p>
                      </>
                    )}
                    {error ? (
                      ""
                    ) : (
                      <>
                        <div className="p-4">
                          <div className="text-center cursor-pointer transition-colors">
                            {draggedFiles.length > 0 && (
                              <>
                                <button
                                  type="button"
                                  className="mt-1 mx-2 px-2 text-white bg-gray-800 border-raduce rounded-lg cursor-pointer hover:underline"
                                  onClick={clearFiles}
                                >
                                  Remove image
                                </button>
                                <button
                                  type="button"
                                  className="mt-1 mx-2 px-2 text-white bg-gray-800 border-raduce rounded-lg cursor-pointer hover:underline"
                                  title="Change image"
                                  onClick={changeImage}
                                >
                                  Change image
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUplod}
                      className="ml-10 cursor-pointer hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
            {error ? (
              <p className="text-red-500 flex mt-2 text-[70%]">{error}</p>
            ) : (
              <div className="flex mt-2">
                <img src={Info} alt="Info" className="pr-2" />
                <p className="text-[13px] text-stone-300">
                  Upload your photo (JPG or PNG, max size 2MB)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadAvatar;
