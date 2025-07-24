/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import Button from "../ui/button/Button";
import { authApi } from "../../api";
import { useAuth } from "../../context/AuthContext";

interface FormData {
  email: string;
  password: string;
}

export default function SignInForm() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await authApi.login(formData);
      const { user, tokens } = response.data;
      login(tokens, user);
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred during sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[580px] rounded-[20px] bg-white p-7.5 shadow-1 dark:bg-gray-800 xl:p-12.5">
      <div className="mb-5">
        <Link
          to="/"
          className="mb-3.5 flex items-center gap-2.5 text-gray-700 dark:text-gray-300"
        >
          <ChevronLeftIcon />
          <span>Back to Home</span>
        </Link>
        <h2 className="mb-1.5 text-2xl font-bold text-black dark:text-white xl:text-title-xl">
          Sign In to TailAdmin
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Please sign in to access your account
        </p>
      </div>

      <div className="mb-4">
        <div className="flex flex-col gap-4">
          <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_191_13499)">
                <path
                  d="M19.8667 10.2753C19.8667 9.58664 19.8001 8.90664 19.6667 8.25664H10.7001V11.7566H15.9001C15.7001 12.8066 15.0334 13.7066 14.0334 14.2753V16.5066H17.0001C18.7001 14.9066 19.8667 12.8066 19.8667 10.2753Z"
                  fill="#4285F4"
                />
                <path
                  d="M10.7 19.5C13.1333 19.5 15.1667 18.7 17 16.5067L14.0333 14.2753C13.2333 14.8067 12.1333 15.1067 10.7 15.1067C8.26667 15.1067 6.23333 13.5833 5.51667 11.4833H2.45V13.7833C4.28333 17.1833 7.3 19.5 10.7 19.5Z"
                  fill="#34A853"
                />
                <path
                  d="M5.51666 11.4833C5.31666 10.9833 5.23333 10.45 5.23333 9.99999C5.23333 9.54999 5.33333 9.01666 5.51666 8.51666V6.21666H2.45C1.84333 7.36666 1.5 8.65 1.5 9.99999C1.5 11.35 1.84333 12.6333 2.45 13.7833L5.51666 11.4833Z"
                  fill="#FBBC05"
                />
                <path
                  d="M10.7 4.89334C12.0667 4.89334 13.2667 5.36667 14.2333 6.28334L16.8667 3.65C15.1667 2.05 13.1333 1.16667 10.7 1.16667C7.3 1.16667 4.28333 3.48334 2.45 6.21667L5.51667 8.51667C6.23333 6.41667 8.26667 4.89334 10.7 4.89334Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_191_13499">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Sign in with Google
          </button>
          <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
            <svg
              width="21"
              className="fill-current"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z" />
            </svg>
            Sign in with X
          </button>
        </div>
        <div className="relative py-3 sm:py-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="p-2 text-gray-400 bg-white dark:bg-gray-800 sm:px-5 sm:py-2">
              Or
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-500 dark:bg-red-500/5">
              {error}
            </div>
          )}
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeCloseIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                id="rememberMe"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label
                htmlFor="rememberMe"
                className="ml-2.5 text-gray-600 dark:text-gray-300"
              >
                Keep me signed in
              </label>
            </div>
            <div>
              <Link
                to="#"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <Button
            className="w-full"
            disabled={isLoading}
            isLoading={isLoading}
          >
            Sign In
          </Button>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
