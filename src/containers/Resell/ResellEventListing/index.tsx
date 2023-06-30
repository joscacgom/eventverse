/* eslint-disable no-unused-vars */
import { BackButton } from '@/containers/Organizer/Events/EventDetails/styles'
import { useRouter } from 'next/router'
import { FC, MouseEvent, useState } from 'react'
import ListingItemCard from './ListingItemCard'
import { Container, Main, Image, AbsoluteTitle, EventTitle, Heading, SubTitle, FilterContainer, FilterButton, ListingContainer } from './styles'
import { TicketListingItem } from '@/models/Resell/types'
import NotFound from '@/components/NotFound'

type Props = {
  listing: TicketListingItem[]
}

enum SortOption {
  Ascending = 'asc',
  Descending = 'desc',
}

const ResellEventListing: FC<Props> = ({ listing }) => {
  const router = useRouter()
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.Ascending)

  const handleFilterClick = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedOption = e.currentTarget.value
    setSortOption(selectedOption as SortOption)
  }

  const renderListingItems = () => {
    if (!listing) return null
    if (listing.length === 0) {
      return <NotFound />
    }

    const sortedListing = [...listing].sort((a: TicketListingItem, b: TicketListingItem) => {
      const aValue = parseFloat(a.buyoutCurrencyValuePerToken.displayValue)
      const bValue = parseFloat(b.buyoutCurrencyValuePerToken.displayValue)

      if (sortOption === SortOption.Ascending) {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    })

    return sortedListing.map((item) => (
      <ListingItemCard
        data-testid={`listing-item-${item.id}`}
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
        <EventTitle>{listing[0]?.asset.name}</EventTitle>
        <Heading>
          <SubTitle>Tickets de reventa disponibles 🎟️</SubTitle>
          <FilterContainer>
            <FilterButton
              value={SortOption.Ascending}
              onClick={handleFilterClick}
              isActive={sortOption === SortOption.Ascending}
            >
              Precio ascendente
            </FilterButton>
            <FilterButton
              value={SortOption.Descending}
              onClick={handleFilterClick}
              isActive={sortOption === SortOption.Descending}
            >
              Precio descendente
            </FilterButton>
          </FilterContainer>
        </Heading>
        <ListingContainer>{renderListingItems()}</ListingContainer>
      </Main>
    </Container>
  )
}

export default ResellEventListing
