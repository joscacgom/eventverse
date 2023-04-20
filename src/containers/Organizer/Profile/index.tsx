import React from 'react'
import { MOCK_EU_COUNTRIES } from './constants'
import { Title, Label, Input, Select, Button, Option } from './styles'

const Profile = () => {
  const renderCountryOptions = () => {
    return MOCK_EU_COUNTRIES.map((country, index) =>
        <Option key={index} value={country}>
            {country}
        </Option>
    )
  }

  return (
        <>
            <Title>Tus datos</Title>

            <Label htmlFor="name">Nombre</Label>
            <Input type="text" id="name" placeholder='Introduce un nombre...' />

            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder='Introduce un email...' />

            <Label htmlFor="phone">Teléfono</Label>
            <Input type="number" id="phone" placeholder='Introduce un teléfono...' />

            <Label htmlFor="description">Description</Label>
            <Input type="text" id="description" placeholder='Introduce una descripción...' />

            <Label htmlFor="country">Country</Label>
            <Select name="country" id="country">
                {renderCountryOptions()}
            </Select>

            <Button>Guardar cambios</Button>
        </>
  )
}

export default Profile
