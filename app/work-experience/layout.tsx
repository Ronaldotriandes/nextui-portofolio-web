export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
        {children}
    </section>
  );
}
