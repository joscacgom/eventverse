import { Layout } from '@/components'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: 80vh;
    width: 100%;
`

const SuccessPage = () => {
  const router = useRouter()
  const { p: payload } = router.query
  console.log('🚀 Payload data', payload)
  return (
        <Layout title='Payment failure'>
            <Container>
            <h1>Payment failure</h1>
            <a href='/'>Go back to home page</a>
            </Container>
        </Layout>
  )
}

export default SuccessPage
