import { Layout } from '@/components'
import { UserSideBar } from '@/components/UserInfo'
import OrganizerFinances from '@/containers/Organizer/Finances'

const index = () => (
    <Layout title={'Tus finanzas'}>
        <UserSideBar />
        <OrganizerFinances />
    </Layout>
)

export default index
