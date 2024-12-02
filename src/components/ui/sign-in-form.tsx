"use client";

import { cn } from "@/lib/utils";

/** icons */
import { KeyRound } from "lucide-react";
import { GithubIcon, GoogleIcon } from "./icons";

/** components */
import {
  Form,
  FormButton,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Separator } from "./separator";
import { Button } from "./button";

/** definitions */
import { type SignUpFormData, SignUpFormSchema } from "@/lib/definitions";

/** auth */
import { signUp } from "@/app/actions/auth";

export const SignSocialMediaForm = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("grid gap-4", className)} {...props}>
      <div className="flex items-center justify-center text-xs uppercase">
        <Separator className="mx-4 flex-1" />
        <span className="text-muted-foreground">Or continue with</span>
        <Separator className="mx-4 flex-1" />
      </div>

      <div className="grid gap-4 grid-cols-2">
        <Button
          variant="outline"
          icon={<GithubIcon />}
          type="button"
          disabled={false}
        >
          Github
        </Button>
        <Button
          variant="outline"
          icon={<GoogleIcon />}
          type="button"
          disabled={false}
        >
          Google
        </Button>
      </div>
    </div>
  );
};

export const SignUpForm = () => {
  async function onSubmit(data: SignUpFormData) {
    try {
      await signUp(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form
      schema={SignUpFormSchema}
      formProps={{
        defaultValues: {
          nickname: "",
        },
      }}
      onSubmit={onSubmit}
      className="grid gap-4 md:gap-6"
    >
      <FormField
        name="nickname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nickname</FormLabel>
            <FormControl>
              <Input placeholder="(e.g., TaskTamer)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormButton icon={<KeyRound />}>Sign Up</FormButton>
    </Form>
  );
};
