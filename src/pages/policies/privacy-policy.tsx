import React from 'react'
import { PrivacyPolicy as PrivacyPolicyContainer } from '@/containers'
import { Layout } from '@/components'

const PrivacyPolicy = () => {
  return (
    <Layout title={'Políticas de privacidad'}>
      <PrivacyPolicyContainer />
    </Layout>

  )
}

export default PrivacyPolicy
