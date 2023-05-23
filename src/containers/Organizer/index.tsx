import { useState } from 'react'
import { OrganizerDetailsTabs } from './types'
import SideBar from '../../components/Sidebar/Organizer'
import { Container, Content } from './styles'
import Events from './Events'
import Finances from './Finances'
import Profile from './Profile'
import NotFound from '@/components/NotFound'

const OrganizerDetails = () => {
  const [activeTab, setActiveTab] = useState<OrganizerDetailsTabs>(OrganizerDetailsTabs.Events)
  const handleUpdateActiveTab = (tab: OrganizerDetailsTabs) => {
    setActiveTab(tab)
  }

  const renderSelectedTab = () => {
    if (activeTab === OrganizerDetailsTabs.Events) return <Events />
    if (activeTab === OrganizerDetailsTabs.Finances) return <Finances />
    if (activeTab === OrganizerDetailsTabs.Profile) return <Profile />
    return <NotFound />
  }
  return (
        <Container>
            <SideBar
              activeTab={activeTab}
              handleUpdateActiveTab={handleUpdateActiveTab}
            />
            <Content>
                {renderSelectedTab()}
            </Content>
        </Container>
  )
}

export default OrganizerDetails
