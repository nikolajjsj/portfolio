interface Props {
  children: React.ReactNode;
  title?: string;
  props?: any;
}

const AppSection = ({ children, title, ...props }: Props) => {
  return (
    <section className=" w-3/4 max-w-screen-lg mx-auto pt-10 z-50" {...props}>
      {title && <h3 className="text-3xl font-bold text-center">{title}</h3>}
      {children}
    </section>
  );
};

export default AppSection;
