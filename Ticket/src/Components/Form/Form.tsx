import { useRandomNumber } from "../Ticket/RandomNumberContext";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AvatarUpload } from "./AvatarUpload";

type RegisterFormData = {
  name: string;
  email: string;
  userName: string;
  avatar: File|null;
};

function Form() {
  const navigate = useNavigate();
  const methods = useForm<RegisterFormData>();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      userName: "",
      avatar: null,
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form data:", data);
    navigate("/ticket", { state: data });
  };

  const { generateRandomNumber } = useRandomNumber();

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="relative z-[2]">
          <div className="flex items-center justify-center">
            <div>
              <AvatarUpload control={control} name="avatar"/>
              <div>
                <p className="mt-lg-2 mt-1 mb-2">Full Name</p>
                <div className="flex items-center justify-center">
                  <input
                    type="text"
                    className="border-raduce w-[450px] rounded-lg border-2 border-gray-500 bg-transparent px-2 py-1"
                    {...register("name", {
                      required: "Please enter valid name",
                    })}
                  />
                </div>
              </div>

              <div className="mb-3">
                <p className="mt-3 mb-2">Email Address</p>
                <div className="flex items-center justify-center">
                  <section>
                    <input
                      type="email"
                      className="border-raduce w-[450px] rounded-lg border-2 border-gray-500 bg-transparent px-2 py-1"
                      placeholder="example@email.com"
                      {...register("email", {
                        required: "Please enter a valid email address",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-2 mb-1 flex text-sm text-[#E97464]">
                        Please enter a valid email address
                      </p>
                    )}
                  </section>
                </div>
              </div>

              <div>
                <p className="mb-2">GitHub Username</p>
                <div className="flex items-center justify-center">
                  <input
                    type="text"
                    className="border-raduce w-[450px] rounded-lg border-2 border-gray-500 bg-transparent px-2 py-1"
                    placeholder="@yourusername"
                    {...register("userName", {
                      required: "Please enter valid userName",
                    })}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={generateRandomNumber}
                  type="submit"
                  className="z-[2] mt-3 w-[450px] rounded-lg bg-[#E97464] px-6 py-2 font-bold text-black"
                >
                  Generate My Ticket
                </button>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default Form;
