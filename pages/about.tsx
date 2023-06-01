/* eslint-disable @next/next/no-html-link-for-pages */

import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'



export default function AboutPage() {


  return (
      <>
        <h1>About Page</h1>
        <h1
          className="title"
        >
          Ir a la pagina de&nbsp;
          <Link href="/">
            Inicio
          </Link>
        </h1>
      </>
  )
}

AboutPage.getLayout = function getLayout(page: any) {
  return (
    <MainLayout title="About Page">
      <DarkLayout >
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
