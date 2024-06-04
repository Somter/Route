import { Link,Outlet  } from 'react-router-dom';

export const MainPage = () => (
    <>
  <nav>
    <ul>
      <li>
        <Link to="/home">Page One</Link>
      </li>
      <li>
        <Link to="/about">Page Two</Link>
      </li>
      <li>
      <Link to="/new">Новинки</Link>
      </li>
    </ul>  
  </nav>
   <hr/> 
 
  <Outlet/>
  </>

);