import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~app/components/ui/tabs";

interface AuthTabsProps {
  loginForm: React.ReactNode;
  registerForm: React.ReactNode;
}

export const AuthTabs = ({ loginForm, registerForm }: AuthTabsProps) => {
  return (
    <Tabs defaultValue="login" className="w-full max-w-md mx-auto">
      <TabsList className="grid w-full rounded-[16px] p-0 grid-cols-2 bg-[#DAE7F3]">
        <TabsTrigger
          className=" !px-[80px] py-[px]  
                  text-[16px] font-medium 
                  transition-all
                  rounded-2xl
                  data-[state=active]:bg-[#2563EB] 
                  data-[state=active]:text-white
                  data-[state=active]:shadow-sm
                  data-[state=inactive]:text-[#2563EB]
                  data-[state=inactive]:hover:text-gray-700"
          value="login"
        >
          Вход
        </TabsTrigger>
        <TabsTrigger
          className=" !px-[84px] 
                  text-[16px] font-medium 
                  transition-all
                  rounded-2xl
                  data-[state=active]:bg-[#2563EB] 
                  data-[state=active]:text-white
                  data-[state=active]:shadow-sm
                  data-[state=inactive]:text-[#2563EB] 
                  data-[state=inactive]:hover:text-gray-700"
          value="register"
        >
          Регистрация
        </TabsTrigger>
      </TabsList>

      <TabsContent value="login" className="mt-6">
        {loginForm}
      </TabsContent>

      <TabsContent value="register" className="mt-6">
        {registerForm}
      </TabsContent>
    </Tabs>
  );
};
