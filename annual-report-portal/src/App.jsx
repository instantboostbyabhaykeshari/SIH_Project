import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import FeaturedSections from './components/FeaturedSections';
import AdditionalCharts from './components/AdditionalCharts';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <MainBanner />
            <FeaturedSections />
            {/* <AdditionalCharts /> */}
            <Footer />
        </div>
    );
}

export default App;
