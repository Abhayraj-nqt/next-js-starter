import { ThemeProvider } from "./theme-provider";

type Props = {
  children: React.ReactNode;
};

const RootLayoutProviders = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default RootLayoutProviders;
