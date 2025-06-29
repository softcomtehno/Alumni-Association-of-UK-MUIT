import { z } from "zod";
import { LoginFormData, RegisterFormData } from "./auth.types";

export const LoginSchema: z.ZodType<LoginFormData> = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

export const RegisterSchema: z.ZodType<RegisterFormData> = z.object({
  // Этап 1
  firstName: z.string().min(1, "Обязательное поле"),
  lastName: z.string().min(1, "Обязательное поле"),
  middleName: z.string().optional(),

  // Этап 2
  email: z.string().email("Введите корректный email"),
  phone: z.string().min(1, "Обязательное поле"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),

  // Этап 3
  institution: z.string().min(1, "Обязательное поле"),
  graduationYear: z.string().min(1, "Обязательное поле"),
  bio: z.string().optional(),
});
