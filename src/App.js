import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {

  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Header 
        search={search}
        setSearch={setSearch}
        setCurrentPage={setCurrentPage}
      />
      <Main 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        search={search}
      />
      <Footer />
    </>
  );
}

export default App;
