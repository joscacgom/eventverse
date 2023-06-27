import { Layout } from '@/components'
import React from 'react'

const FailurePage = () => {
  return (
    <Layout title='Payment failure'>
        <h1>Pago cancelado ❌</h1>
        <a href='/'>Vuelve a la página de inicio</a>
    </Layout>
  )
}

export default FailurePage
