/* eslint-disable @next/next/no-html-link-for-pages */

import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayout title="Pagina de Contactos">
    <h1>Pagina de Contactos</h1>
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
