
import React, { FC } from 'react'
import { Ticket } from '@/models/Tickets/types'
import { MainContainer, ResellTicketImage, Container, RoyaltiesContainer, RoyaltiesHeader, Royalties, NetworkContainer, NetworkHeader, SmartContract, SmartContractHeader, SmartContractAddress, BlockchainExplorer, BlockchainContainer, BlockchainHeader, Blockchain } from './styles'

type Props = {
    ticket: Ticket;
}

const ResellTicketNetworkInfo: FC<Props> = ({ ticket }) => {
  return (
       <MainContainer>
            <ResellTicketImage src={ticket.image} alt="Event image" />
            <Container>
              <RoyaltiesContainer>
                <RoyaltiesHeader>Royalties</RoyaltiesHeader>
                <Royalties>{ticket.platformRoyalty}% comisión de EventVerse</Royalties>
                <Royalties>{ticket.organizerRoyalty}% comisión del organizador</Royalties>
              </RoyaltiesContainer>
              <NetworkContainer>
                <NetworkHeader>Información del smart contract</NetworkHeader>
                <SmartContract>
                  <SmartContractHeader>Dirección del contrato</SmartContractHeader>
                  <SmartContractAddress>{ticket.contractAddress}</SmartContractAddress>
                  <BlockchainExplorer>Ver en PolygonScan</BlockchainExplorer>
                </SmartContract>
                <BlockchainContainer>
                  <BlockchainHeader>Blockchain</BlockchainHeader>
                  <Blockchain>Polygon</Blockchain>
                </BlockchainContainer>
                </NetworkContainer>
            </Container>
        </MainContainer>

  )
}

export default ResellTicketNetworkInfo
