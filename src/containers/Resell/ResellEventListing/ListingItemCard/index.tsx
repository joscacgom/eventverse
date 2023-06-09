import React, { FC } from 'react'
import { CardContent, CardImage, CardWrapper, Price, Title } from './styles'
import { TicketListingItem } from '@/models/Resell/types'
import CrossmintButton from '@/components/Event/EventBuyOption/CrossmintButton'

type Props = {
  listingItem: TicketListingItem
}
const EventCard: FC<Props> = ({ listingItem }) => {
  const maticPrice = listingItem.buyoutCurrencyValuePerToken.displayValue

  return (
    <CardWrapper>
      <CardImage src={listingItem.asset.image} />
      <CardContent>
        <Title>{listingItem.asset.name}</Title>
        <Price>{maticPrice} MATIC</Price>
        <CrossmintButton quantity={1} totalPrice={0.01} />
      </CardContent>
    </CardWrapper>
  )
}

export default EventCard
