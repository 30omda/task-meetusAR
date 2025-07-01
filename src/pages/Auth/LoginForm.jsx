import { useDispatch, useSelector } from "react-redux";
import { signIn } from "@/Store/api/auth/authAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);


  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(signIn(data));
  };
  useEffect(() => {
    const localUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");


    if (user && localUser && token) {
      navigate("/");
    }
  }, [user, navigate]);




  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-9 w-full max-w-md p-8"
    >
      {/* Welcome text */}
      <div className="flex flex-col items-center gap-2 w-full">
        <h1 className="text-[#1a1a1d] text-4xl md:text-5xl font-normal text-center">
          Welcome back
        </h1>
        <p className="text-[#62616b] text-base md:text-lg font-normal text-center">
          Step into our shopping metaverse for an unforgettable shopping experience
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full">
        {/* Email Field */}
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-3 p-4 rounded-lg  bg-white/30 backdrop-blur-sm transition-all focus-within:ring-2 focus-within:ring-[#9414ff]">
            <Mail className="w-6 h-6 text-[#62626b]" />
            <Input
              {...register("email")}
              type="email"
              placeholder="Email"
              autoComplete="current-email"
              className="border-0 bg-transparent p-0 h-auto shadow-none text-[#62626b] text-base focus-visible:ring-0 focus-visible:ring-offset-0 file:"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-3 p-4 rounded-lg   bg-white/30 backdrop-blur-sm transition-all focus-within:ring-2 focus-within:ring-[#9414ff]">
            <Lock className="w-6 h-6 text-[#62626b]" />
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="border-0 bg-transparent p-0 h-auto shadow-none text-[#62626b] text-base focus-visible:ring-0 focus-visible:ring-offset-0 "
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
      </div>


      {/* Login button */}
      <Button
        type="submit"
        className="  cursor-pointer w-full px-5 py-3 bg-[#9414ff] hover:bg-[#8412e0] rounded-lg text-white text-base"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>

      {/* Sign up text */}
      <p className="text-[#62616b] text-sm text-center">
        Don't have an account?{" "}
        <span className="cursor-pointer hover:underline text-[#9414ff]">Sign up</span>
      </p>
    </form>
  );
}
