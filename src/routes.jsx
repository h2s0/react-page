import Detail1 from '@/pages/Detail1'
import Detail2 from '@/pages/Detail2'
import Detail3 from '@/pages/Detail3'
import Detail4 from '@/pages/Detail4'
import Detail5 from '@/pages/Detail5'
import Detail6 from '@/pages/Detail6'
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={ <RootLayout/> } />
            <Route path='/Detail1' element={ <Detail1/> } />
            <Route path='/Detail2' element={ <Detail2/> } />
            <Route path='/Detail3' element={ <Detail3/> } />
            <Route path='/Detail4' element={ <Detail4/> } />
            <Route path='/Detail5' element={ <Detail5/> } />
            <Route path='/Detail6' element={ <Detail6/> } />
        </>
    )
)

export default router;