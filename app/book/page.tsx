"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

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
import { formSchema } from "@/schema/schema";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Book = () => {
  const [disabled, setDisabled] = useState(false);
  // 1. Define your form.
  const form = useForm<formSchema>({
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

  async function onSubmit(values: formSchema) {
    try {
      setDisabled(true);
      await axios.post("/api/appointment", values);
      toast({
        title: "Appointment Booked Successfully.",
        description: "We will call you shortly.",
      });
      form.reset();
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to Book Appointment",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setDisabled(false);
    }
  }
  return (
    <div>
      <Wrapper className="flex flex-col gap-4 justify-center items-center my-10">
        <h1 className="scroll-m-20 text-4xl  md:text-6xl font-extrabold tracking-tight lg:text-7xl">
          Book an Appointment
        </h1>
        <p className="leading-7 text-sm md:text-md">
          Please fill out the correct details.
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
                        value={field.value}
                        className="flex flex-col space-y-1"
                        disabled={disabled}
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
                          disabled={disabled}
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
                          type="number" // Ensure input is numeric
                          placeholder="XXXXXXXXXX"
                          {...field}
                          className="bg-[#F4F5F9]"
                          disabled={disabled}
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
                          type="number" // Ensure input is numeric
                          placeholder="43"
                          {...field}
                          className="bg-[#F4F5F9]"
                          disabled={disabled}
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
                          value={field.value}
                          className="flex items-center h-8"
                          disabled={disabled}
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
                        disabled={disabled}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="flex items-center justify-center w-full"
                disabled={disabled}
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
