import type { PropsWithChildren } from "react";



type LayoutProps = PropsWithChildren;

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <header>
        <h2>Prosjektportefølje</h2>
      </header>
      <main className="container">{children}</main>
    </>
  );
}
