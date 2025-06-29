import { Button } from "~app/components/ui/button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { ShieldCloseIcon } from "lucide-react";
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", path: "/" },
    { name: "О нас", path: "/about" },
    { name: "Новости", path: "/news" },
    { name: "Выпускники", path: "/graduates" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <header className="pt-[16px] ">
      <div className="bg-white/80  sticky mx-auto rounded-2xl top-0 z-50">
        <div className="max-w-[1440px] mx-auto ">
          <div className="flex justify-between items-center py-2 pl-[24px] pr-[8px]">
            <NavLink
              to="/"
              className="text-[16px] text-[#102552] font-sans font-semibold hover:text-blue-600 transition-colors"
            >
              Ассоциация выпускников МУИТ
            </NavLink>

            <nav className="max-[840px]:hidden flex items-center space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[#102552]   font-base hover:text-blue-600 transition-colors ${
                      isActive ? "font-semibold text-blue-600" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Button
                asChild
                variant="outline"
                className="hidden text-base px-7 py-2 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] sm:flex"
              >
                <NavLink to="/login">Войти</NavLink>
              </Button>
            </nav>

            <div className="hidden max-[840px]:block">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <ShieldCloseIcon /> : <MenuIcon />}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="hidden max-[840px]:block  py-4 border-t">
              <div className="flex flex-col space-y-3 px-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `py-2 px-4 rounded hover:bg-gray-50 ${
                        isActive
                          ? "text-blue-600 font-medium bg-blue-50"
                          : "text-gray-700 hover:text-blue-600"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Button
                  asChild
                  variant="outline"
                  className="mt-2 bg-[#2563EB] rounded-3xl"
                >
                  <NavLink to="/login" onClick={() => setMobileMenuOpen(false)}>
                    Войти
                  </NavLink>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
