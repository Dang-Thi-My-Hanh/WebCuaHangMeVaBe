import React from 'react';
import Header2 from '../components/header2';
import Footer from '../components/footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="layout">
            <Header2 />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
