import Login from "./pages/pageLogin/login";
import Home from "./pages/pageHome/home";
import SearchResults from "./pages/pageSearchResults/searchResults";
import Address from "./pages/pageAddress/address";
import Account from "./pages/pageAccount/account";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/mainLayout";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout> <Home /></MainLayout>}/>
                <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
                <Route path="/search" element={<MainLayout><SearchResults /></MainLayout>} />
                <Route path="/address" element={<MainLayout><Address /></MainLayout>} />
                <Route path="/account" element={<MainLayout><Account /></MainLayout>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
