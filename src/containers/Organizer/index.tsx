import { useState } from 'react'
import { OrganizerDetailsTabs } from './types'
import SideBar from '../../components/Sidebar/Organizer'
import { Container, Content } from './styles'

const OrganizerDetails = () => {
  const [activeTab, setActiveTab] = useState<OrganizerDetailsTabs>(OrganizerDetailsTabs.Events)
  const handleUpdateActiveTab = (tab: OrganizerDetailsTabs) => {
    setActiveTab(tab)
  }
  return (
        <Container>
            <SideBar
                activeTab={activeTab}
                handleUpdateActiveTab={handleUpdateActiveTab}
            />
            <Content>Content</Content>
        </Container>
  )
}

export default OrganizerDetails
