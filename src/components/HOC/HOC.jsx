import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const withLayout = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <Navbar />
                <main className='container'>
                    <WrappedComponent {...props} />
                </main>
                <Footer />
            </div>
        );
    };
};

export default withLayout;