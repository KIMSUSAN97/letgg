import { Route, Routes, Link} from 'react-router-dom';

function Header(){
    return (
      <div className="header">
      <h4>
      <Link to="/">LET.GG</Link>
      </h4>
      <nav className="nav">
        <li>챔피언 분석</li>
        <li>랭킹</li>
        <li>커뮤니티</li>
        <li>아이템</li>
      </nav>
      <img className="logo33" src="img/League_of_Legends_2019_vector.svg"/>
      </div> 
    )
  }

export default Header