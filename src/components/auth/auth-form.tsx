"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { cn } from "@/lib/utils";

export type AuthFormProps = React.HTMLAttributes<HTMLDivElement>;

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required"),
});

export function AuthForm({ className, ...props }: AuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    setIsLoading(true);

    setTimeout(() => {
      router.push("/dashboard");
    }, 200);
  }

  return (
    <div
      className={cn(
        "my-3 grid min-h-[60vh]  w-full md:min-h-[26.3125rem] md:w-full max-w-[38.6875rem] px-2 py-[3rem] bg-primary  rounded-[0.9375rem] mx-[1rem]",
        className
      )}
      {...props}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full  w-full flex flex-col   max-w-[23.975rem] mx-auto"
        >
          <div className="space-y-3 flex justify-center flex-col ">
            <span className="block mx-auto text-xs font-extrabold text-blue">
              Super Admin
            </span>
            <span className="block mx-auto text-[2rem] font-bold text-primary-foreground">
              Login
            </span>
          </div>

          <div className="space-y-4 max-w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-lg bg-secondary text-secondary-foreground h-[3.25rem] border-secondary"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-lg bg-secondary text-secondary-foreground h-[3.25rem] border-secondary"
                      placeholder="Pasword"
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className="font-extrabold text-xs  text-foreground bg-blue uppercase rounded-lg h-[3.25rem] hover:bg-blue/50 disabled:text-secondary-foreground"
            type="submit"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin text-secondary-foreground" />
            )}
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
}
