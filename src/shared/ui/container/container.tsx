interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[1440px] mx-auto pb-10">{children}</div>;
};
