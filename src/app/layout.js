import { Inter } from 'next/font/google'
import Head from 'next/head'; 
import styles from "./components/variables.module.scss"; 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aplicacion APINEXT',
  description: 'Aplicacion de ventas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta charset="UTF-8"/>
        <meta httpEquiv='X-UA-Compatible' content='IE-edge' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={styles.body}>{children}</body>
    </html>
  )
}
