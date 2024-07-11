import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function Login() {
  const LoginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  });

  type schema = z.infer<typeof LoginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<schema>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<schema> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-10 max-w-xl w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between w-full flex-col gap-4">
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-1 md:gap-2">
          <p className="font-semibold text-sm text-black-secondary">Email</p>
          <Input
            type="email"
            {...register("email")}
            placeholder="user@example.com"
            className="h-[45px] bg-transparent"
            title="Enter your email"
          />
          {errors.email && (
            <span className="error peer">{errors.email.message as string}</span>
          )}
        </label>
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-1 md:gap-2">
          <p className="font-semibold text-sm text-black-secondary">Password</p>
          <Input
            type="password"
            {...register("password")}
            placeholder="********"
            className="h-[45px] bg-transparent"
            title="Enter your password"
          />
          {errors.password && (
            <span className="error">{errors.password.message as string}</span>
          )}
        </label>
      </div>

      <Button type="submit" className="w-full">
        <p className="text-sm font-bold text-white">Submit</p>
      </Button>
    </form>
  );
}
