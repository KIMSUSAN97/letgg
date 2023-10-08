import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import Champ from './Routes/Champ';
import Rank from './Routes/Rank';
import Header from './components/head';

function App() {

  // 검색어 상태 변수
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  }

  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={
        <>
        <div>
        <input className="search" type="text" placeholder="소환사 명, 닉네임을 입력하세요" value={searchTerm} onChange={handleChange}/>
        </div>
        </>
        }></Route>
        <Route path="/champ" element={<Champ/>}></Route>
        <Route path="/ank" element={<Rank/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

