import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~app/components/ui/form";
import { Input } from "~app/components/ui/input";
import { Textarea } from "~app/components/ui/textarea";
import { Button } from "~app/components/ui/button";
import { contactFormSchema, ContactFormValues } from "./contact-form.types";

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => Promise<void>;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-0 bg-[#DAE7F3] rounded-2xl border border-solid border-[#A4C6E6] text-base placeholder:text-[14px] placeholder:text-[#363F51] placeholder:font-medium font-medium text-[#363F51] text-[14px]"
                    placeholder="Ваше имя"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-0 bg-[#DAE7F3] rounded-2xl border border-solid border-[#A4C6E6] text-base placeholder:text-[14px] placeholder:text-[#363F51] placeholder:font-medium font-medium text-[#363F51] text-[14px]"
                    placeholder="Ваш email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тема</FormLabel>
              <FormControl>
                <Input
                  className="focus-visible:ring-0 bg-[#DAE7F3] rounded-2xl border border-solid border-[#A4C6E6] text-base placeholder:text-[14px] placeholder:text-[#363F51] placeholder:font-medium font-medium text-[#363F51] text-[14px]"
                  placeholder="Тема сообщения"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Сообщение</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ваше сообщение"
                  className="min-h-[120px] focus-visible:ring-0 bg-[#DAE7F3] rounded-2xl border border-solid border-[#A4C6E6]  placeholder:text-[14px] placeholder:text-[#363F51] placeholder:font-medium font-medium text-[#363F51] text-[14px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#2563EB] rounded-2xl font-semibold text-[16px] text-white"
        >
          Отправить
        </Button>
      </form>
    </Form>
  );
};
