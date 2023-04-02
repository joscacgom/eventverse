import React from 'react'
import { Foot, Menu, MenuItem, Text, Title } from './styles'

const Footer = () => (
  <Foot>
    <Title>EventVerse</Title>
    <Menu>
      <MenuItem href="/">
        <Text>Aviso legal</Text>
      </MenuItem>
      <MenuItem href="/">
        <Text>Contacto</Text>
      </MenuItem>
      <MenuItem href="/">
        <Text>Política de privacidad</Text>
      </MenuItem>
    </Menu>
  </Foot>
)

export default Footer
