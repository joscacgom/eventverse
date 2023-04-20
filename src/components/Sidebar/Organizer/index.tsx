import React, { FC } from 'react'
import { OrganizerDetailsTabs } from '../../../containers/Organizer/types'
import { Container, TabButton } from './styles'

type Props = {
    activeTab: OrganizerDetailsTabs
    handleUpdateActiveTab: (tab: OrganizerDetailsTabs) => void
}
const SideBar: FC<Props> = ({ activeTab, handleUpdateActiveTab }) => {
  return (
        <Container>
            <TabButton
                active={activeTab === OrganizerDetailsTabs.Events}
                onClick={() => handleUpdateActiveTab(OrganizerDetailsTabs.Events)}
            >
                {OrganizerDetailsTabs.Events}
            </TabButton>

            <TabButton
                active={activeTab === OrganizerDetailsTabs.Finances}
                onClick={() => handleUpdateActiveTab(OrganizerDetailsTabs.Finances)}
            >
                {OrganizerDetailsTabs.Finances}
            </TabButton>

            <TabButton
                active={activeTab === OrganizerDetailsTabs.Profile}
                onClick={() => handleUpdateActiveTab(OrganizerDetailsTabs.Profile)}>
                {OrganizerDetailsTabs.Profile}
            </TabButton>
        </Container>
  )
}

export default SideBar
