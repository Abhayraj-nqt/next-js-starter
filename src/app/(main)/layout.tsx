type Props = {
  children: React.ReactNode;
};

export default function MainLayoutProvider({ children }: Readonly<Props>) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
