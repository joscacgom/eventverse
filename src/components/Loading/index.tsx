import React, { FC } from 'react'
import { Spinner, Loader } from './styles'

type Props = {
  type: 'button' | 'main'
}
const Loading:FC<Props> = ({ type }) => {
  return (
        <Spinner type={type}>
            <Loader></Loader>
        </Spinner>
  )
}

export default Loading
