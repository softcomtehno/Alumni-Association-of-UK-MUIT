import { Header } from "~widgets/index";
import { LoginForm } from "~features/auth";
import { RegisterSteps } from "~features/auth";
import { AuthTabs } from "~widgets/auth-tabs";
export const AuthPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center  py-12 px-4 ">
        <div className="w-full max-w-md space-y-8">
          <AuthTabs
            loginForm={<LoginForm />}
            registerForm={<RegisterSteps />}
          />
        </div>
      </div>
    </div>
  );
};
