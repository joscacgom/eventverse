import React, { FC } from 'react'
import { BuyButton, CardContent, CardImage, CardWrapper, Price, Title } from './styles'
import { useRouter } from 'next/router'
import { ListingItem } from '@/models/Resell/types'

type Props = {
  listingItem: ListingItem
}
const EventCard: FC<Props> = ({ listingItem }) => {
  const router = useRouter()
  return (
    <CardWrapper onClick={() => router.push(`/ticket/${listingItem.id}`)}>
      <CardImage src={listingItem.image} />
      <CardContent>
        <Title>{listingItem.title}</Title>
        <Price>{listingItem.price}€</Price>
        <BuyButton>Comprar</BuyButton>
      </CardContent>
    </CardWrapper>
  )
}

export default EventCard
