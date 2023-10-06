import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import Champ from './Routes/Champ';

function App() {

  // 검색어 상태 변수
  const [searchTerm, setSearchTerm] = useState('');


  
  return (
    <div className="App">
      <Header></Header>
      <div>
        <input className="search" type="text" placeholder="소환사 명, 닉네임을 입력하세요" value={searchTerm}/>
      </div>
      <Routes>
        <Route path="/champ" element={<Champ/>}></Route>
      </Routes>
    </div>
  );
}

function Header(){
  return (
    <div className="header">
    <h4>LET.GG</h4>
    <nav className="nav">
      <li>챔피언 분석</li>
      <li>랭킹</li>
      <li>커뮤니티</li>
      <li>아이템</li>
    </nav>
    </div> 
  )
}

export default App;

