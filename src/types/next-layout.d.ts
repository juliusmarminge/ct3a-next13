type PageParams = Record<string, string>;

export interface LayoutProps {
  children: React.ReactNode;
  params?: PageParams;
}

export type LayoutComponent = (
  props: LayoutProps
) => React.ReactNode | Promise<React.ReactNode>;

type PageParams = Record<string, string>;

export interface PageProps {
  params?: PageParams;
  searchParams?: Record<string, string | string[]>;
}

export type PageComponent = (
  props: PageProps
) => React.ReactNode | Promise<React.ReactNode>;
