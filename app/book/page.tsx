"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Wrapper } from "@/components/globals/Wrapper";

const formSchema = z.object({
  registeringFor: z.string(),
  name: z.string().min(2).max(50),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  age: z
    .string()
    .min(0, "Age must be a non-negative number")
    .max(120, "Age must be less than 120"),
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

const Book = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      registeringFor: "",
      name: "",
      phone: "",
      age: "",
      gender: "",
      reason: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <Wrapper className="flex flex-col gap-4 justify-center items-center my-10">
        <h1 className="scroll-m-20 text-4xl  md:text-6xl font-extrabold tracking-tight lg:text-7xl">
          Book an Appointment
        </h1>
        <p className="leading-7 text-sm md:text-md">
          Fill out the correct details.
        </p>
      </Wrapper>

      <Wrapper className="max-w-screen-2xl my-10">
        <div className="flex flex-col md:items-center gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="registeringFor"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      I am registering for<sup>*</sup>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="myself" />
                          </FormControl>
                          <FormLabel className="font-normal">Myself</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal">Other</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Patient&apos;s Name<sup>*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ravi"
                          {...field}
                          className="bg-[#F4F5F9]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Phone Number<sup>*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="XXXXXXXXXX"
                          {...field}
                          className="bg-[#F4F5F9]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Age<sup>*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="43"
                          {...field}
                          className="bg-[#F4F5F9]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>
                        Gender<sup>*</sup>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex items-center h-8"
                        >
                          <FormItem className="flex items-center space-x-1 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal">Male</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="female" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Female
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Reason for booking."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="flex items-center justify-center w-full"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </Wrapper>
    </div>
  );
};

export default Book;
