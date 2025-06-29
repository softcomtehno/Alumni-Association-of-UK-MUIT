export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = {
  // Шаг 1
  firstName: string;
  lastName: string;
  middleName?: string;

  // Шаг 2
  email: string;
  phone: string;
  password: string;

  // Шаг 3
  institution: string;
  graduationYear: string;
  bio?: string;
};
