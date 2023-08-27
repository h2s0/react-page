import RootLayout from "./layout/RootLayout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
    return(
        <>
            <RouterProvider router={router} />
        </>
    )
    
}

export default App;