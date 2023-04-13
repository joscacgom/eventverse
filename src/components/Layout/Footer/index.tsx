import React from 'react'
import { Foot, Menu, MenuItem, Text, Title } from './styles'

const Footer = () => (
  <Foot>
    <Title>EventVerse</Title>
    <Menu>
      <MenuItem href="/policies/legal">
        <Text>Aviso legal</Text>
      </MenuItem>
      <MenuItem href="/policies/contact">
        <Text>Contacto</Text>
      </MenuItem>
      <MenuItem href="/policies/privacy-policy">
        <Text>Política de privacidad</Text>
      </MenuItem>
    </Menu>
  </Foot>
)

export default Footer
