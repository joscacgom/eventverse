import { BackButton } from '@/containers/Organizer/Events/EventDetails/styles'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import ListingItemCard from './ListingItemCard'
import { Container, Main, Image, AbsoluteTitle, EventTitle, Heading, SubTitle, FilterContainer, FilterButton, ListingContainer } from './styles'
import { TicketListingItem } from '@/models/Resell/types'

type Props = {
  listing: TicketListingItem[]
}
const ResellEventListing: FC<Props> = ({ listing }) => {
  const router = useRouter()
  const renderListingItems = () => {
    return listing.map((item) => (
      <ListingItemCard
        key={item.id}
        listingItem={item}
      />
    ))
  }
  return (
    <Container>
      <AbsoluteTitle>Reventas</AbsoluteTitle>
      <Image src={'/images/events/medusa-fest-wallpaper.jpg'} />
      <Main>
        <BackButton onClick={() => router.back()}>Volver</BackButton>
        <EventTitle>{listing[0].asset.name}</EventTitle>
        <Heading>
          <SubTitle>Tickets de reventa disponibles 🎟️</SubTitle>
          <FilterContainer>
            <FilterButton>Precio ascendente</FilterButton>
          </FilterContainer>
        </Heading>
        <ListingContainer>
          {renderListingItems()}
        </ListingContainer>
      </Main>
    </Container>
  )
}

export default ResellEventListing
