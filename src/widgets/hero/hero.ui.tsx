import { useLocation } from "react-router-dom";
import { Button } from "~app/components/ui/button";
import { Header } from "~widgets/header";
import { HERO_CONTENT } from "./model/constants";

export const Hero = () => {
  const location = useLocation();
  const currentPath = location.pathname.endsWith("/")
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const content = HERO_CONTENT[currentPath] || HERO_CONTENT["/"];

  return (
    <section
      className="text-white rounded-b-[80px] bg-[linear-gradient(270deg,#43D0C9_37.94%,#2563EB_100%),linear-gradient(270deg,rgba(37,99,235,0)_0%,#2563EB_87.5%)]"
      style={{ background: content.background }}
    >
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <div className="pt-[60px] pb-[80px] px-4">
          <h1 className="text-[68px]  max-[640px]:text-[40px] max-w-[990px] leading-18 max-[640px]:leading-10 max-[430px]:leading-7 max-[430px]:mb-3 max-[430px]:text-[24px] font-sans font-bold  mb-6">
            {content.title}
          </h1>
          <p className="text-[24px] leading-7 max-[430px]:leading-5  max-[430px]:text-base mb-10 max-w-[680px] font-normal font-sans">
            {content.description}
          </p>

          {content.showButtons && (
            <div className="flex flex-col sm:flex-row gap-4">
              {content.primaryButton && (
                <Button
                  asChild
                  size="lg"
                  className="bg-white font-bold text-[18px] h-[50px] px-[24px] rounded-[16px] text-[#2563EB] hover:bg-gray-100"
                >
                  <a href={content.primaryButton.link}>
                    {content.primaryButton.text}
                  </a>
                </Button>
              )}
              {content.secondaryButton && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent h-[50px] text-[18px] px-[24px] rounded-[16px] border-white text-white hover:bg-white/10 hover:border-white/80"
                >
                  <a href={content.secondaryButton.link}>
                    {content.secondaryButton.text}
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
