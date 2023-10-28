import Header from './Header'
import Footer from './Footer'
import CardList from '@/components/CardList'

function RootLayout() {
    return (
        <>
            <Header/>
            <CardList/>
            <Footer/>
        </>
    )
}

export default RootLayout