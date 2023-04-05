
import React from 'react'
import Image from 'next/image'
import { LoginContainer, GoogleButton, MainContainer, Separator, WalletButton, IconWrapper, ButtonText } from './styles'

const Login = () => {
  return (
        <MainContainer>
          <Image src="/images/brand/eventverse-logo-black.png" alt="EventVerse" width={150} height={100} />
          <LoginContainer>
          <h1>Inicia sesión o regístrate</h1>
          <GoogleButton>
            <IconWrapper>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width={20} height={20} />
            </IconWrapper>
            <ButtonText>Inicia sesión con tu cuenta de google</ButtonText>
          </GoogleButton>
          <Separator/>
          <WalletButton > Conectar wallet </WalletButton>
          <small>Cuando creas una nueva cuenta aceptas las políticas de privacidad y los términos de uso de EventVerse.</small>
        </LoginContainer>
      </MainContainer>

  )
}

export default Login
