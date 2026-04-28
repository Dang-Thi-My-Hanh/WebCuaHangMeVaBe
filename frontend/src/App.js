import Login from "./pages/pageLogin/login";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/mainLayout";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*k có navbar */}
                {/*<Route path="/" element={<Welcome />} />*/}

                {/* Các trang trong app – có bottom navbar */}
                {/*<Route path="/" element={<Welcome />} /> */}
                {/* <Route path="/product/:id" element={<BackLayout><ProductDetail /></BackLayout>} />*/}
                {/* <Route path="/account" element={<BackLayout> <Account /> </BackLayout>}/>*/}
                {/* <Route path="/home" element={<MainLayout> <Home /></MainLayout>}/>*/}
                <Route path="/" element={<MainLayout><Login /></MainLayout>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
