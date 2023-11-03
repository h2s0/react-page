import Header from './Header'
import Footer from './Footer'
import CardList from './CardList'
import BottomNav from '@/components/BottomNav'

function RootLayout() {
    return (
        <>
            <Header/>
            <CardList/>
            <Footer/>
            <BottomNav/>
        </>
    )
}

export default RootLayout