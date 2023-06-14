import React, { FC } from 'react'
import { Spinner, Loader } from './styles'

type Props = {
  type: 'button' | 'main'
}
const Loading:FC<Props> = ({ type }) => {
  return (
        <Spinner data-testid="spinner" type={type}>
            <Loader></Loader>
        </Spinner>
  )
}

export default Loading
