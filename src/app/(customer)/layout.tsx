import { AppLayout } from '@/components/layout/AppLayout';

export default function CustomerLayout({ children }: LayoutProps<'/'>) {
  return <AppLayout>{children}</AppLayout>;
}
