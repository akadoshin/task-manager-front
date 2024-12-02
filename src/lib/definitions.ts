import { z } from "zod";

export const SignUpFormSchema = z.object({
  nickname: z
    .string()
    .min(3, {
      message: "Must be at least 3 characters.",
    })
    .max(15, {
      message: "Must be at most 15 characters.",
    }),
});

export type SignUpFormData = z.infer<typeof SignUpFormSchema>;
