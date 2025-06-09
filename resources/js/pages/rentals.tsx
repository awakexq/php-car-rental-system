import React from 'react';
import AllUserRentals from '@/components/AllUserRentals';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function RentalsPage() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-2 py-6 mt-10">
                <AllUserRentals />
            </div>
            <Footer />
        </>
    );
} 