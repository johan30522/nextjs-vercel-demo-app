

import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout title="Pagina de Inicio">
      <h1>Pagina de Inicio</h1>
      <h1
        className="title"
      >
        Ir a la pagina de&nbsp;
        <Link href="/">
          Inicio
        </Link>
      </h1>
    </MainLayout>
  )
}
