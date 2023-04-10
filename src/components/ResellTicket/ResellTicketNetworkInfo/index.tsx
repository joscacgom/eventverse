
import React, { FC } from 'react'
import { Ticket } from '@/models/Tickets/types'
import { ResellTicketNetworkInfoMainContainer, ResellTicketNetworkImage, ResellTicketNetworkInfoContainer, ResellTicketNetworkInfoRoyaltiesContainer, ResellTicketNetworkInfoRoyaltiesHeader, ResellTicketNetworkInfoRoyalties, ResellTicketNetworkInfoNetworkContainer, ResellTicketNetworkInfoNetworkHeader, ResellTicketNetworkInfoSmartContract, ResellTicketNetworkInfoSmartContractHeader, ResellTicketNetworkInfoSmartContractAddress, ResellTicketNetworkInfoBlockchainExplorer, ResellTicketNetworkInfoBlockchainContainer, ResellTicketNetworkInfoBlockchainHeader, ResellTicketNetworkInfoBlockchain } from './styles'

type Props = {
    ticket: Ticket;
}

const ResellTicketNetworkInfo:FC<Props> = ({ ticket }) => {
  return (
       <ResellTicketNetworkInfoMainContainer>
            <ResellTicketNetworkImage src={ticket.event.image} alt="Event image" />
            <ResellTicketNetworkInfoContainer>
              <ResellTicketNetworkInfoRoyaltiesContainer>
                <ResellTicketNetworkInfoRoyaltiesHeader>Royalties</ResellTicketNetworkInfoRoyaltiesHeader>
                <ResellTicketNetworkInfoRoyalties>{ticket.platformRoyalty}% comisión para EventVerse</ResellTicketNetworkInfoRoyalties>
                <ResellTicketNetworkInfoRoyalties>{ticket.organizerRoyalty}% comisión para el organizador</ResellTicketNetworkInfoRoyalties>
              </ResellTicketNetworkInfoRoyaltiesContainer>
              <ResellTicketNetworkInfoNetworkContainer>
                <ResellTicketNetworkInfoNetworkHeader>Información del smart contract</ResellTicketNetworkInfoNetworkHeader>
                <ResellTicketNetworkInfoSmartContract>
                  <ResellTicketNetworkInfoSmartContractHeader>Dirección del contrato</ResellTicketNetworkInfoSmartContractHeader>
                  <ResellTicketNetworkInfoSmartContractAddress>{ticket.contractAddress}</ResellTicketNetworkInfoSmartContractAddress>
                  <ResellTicketNetworkInfoBlockchainExplorer>Ver en PolygonScan</ResellTicketNetworkInfoBlockchainExplorer>
                </ResellTicketNetworkInfoSmartContract>
                <ResellTicketNetworkInfoBlockchainContainer>
                  <ResellTicketNetworkInfoBlockchainHeader>Blockchain</ResellTicketNetworkInfoBlockchainHeader>
                  <ResellTicketNetworkInfoBlockchain>Polygon</ResellTicketNetworkInfoBlockchain>
                </ResellTicketNetworkInfoBlockchainContainer>

                </ResellTicketNetworkInfoNetworkContainer>
            </ResellTicketNetworkInfoContainer>
        </ResellTicketNetworkInfoMainContainer>

  )
}

export default ResellTicketNetworkInfo
