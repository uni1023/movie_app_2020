import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


// a 태그를 사용하면 클릭할 때마다 새로고침함으로 리액트의 장점이 사라짐 => react-router-dom 기능을 사용하면 됨.
function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link> 
            <Link to={{ pathname: '/about', state: { fromNavigation: true }}}>About</Link>
        </div>
    );
}

export default Navigation;