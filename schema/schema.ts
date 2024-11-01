import { z } from "zod";

export const formSchema = z.object({
  registeringFor: z.string(),
  name: z.string().min(2, "Name is too small.").max(50, "Name is too big"),
  phone: z.string().length(10, "Phone must be 10 digits long."),
  age: z
    .string()
    .min(0, "Age must be a non-negative number")
    .max(130, "Age must be less than 130"),
  gender: z.string(),
  reason: z
    .string()
    .min(0, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    })
    .optional(),
});

export type formSchema = z.infer<typeof formSchema>;
