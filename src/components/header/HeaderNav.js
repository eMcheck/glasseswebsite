
import { NavLink } from "react-router-dom";
import cls from './HeaderNav.module.css'

export default function HeaderNav(props) {

    let num = 0;
    for (let key in props.cart) {
        num += props.cart[key]
    }


    return (
        <div className={cls.container}>
            <div className={cls.wrapp}>
                <div><NavLink to="/"><img src="./img/logo.png" alt="logo" /></NavLink></div>
                <div className={cls.nav}>
                    <ul>
                        <li><NavLink to="/">{props.state.home.toUpperCase()}</NavLink></li>
                        <li><NavLink to="/women">{props.state.women.toUpperCase()}</NavLink></li>
                        <li><NavLink to="/men">{props.state.men.toUpperCase()}</NavLink></li>
                        <li><NavLink to="/other">{props.state.other.toUpperCase()}</NavLink></li>
                    </ul>
                </div>

            </div>
            <div className={cls.wrapp}>
                <div className={cls.wrapp_search}>
                    <input
                        onChange={props.hendlerSearch}
                        type="text" placeholder={props.state.search + '...'}
                        onKeyPress={(event) => event.key === 'Enter' ? window.location.href = '/search' : ''}
                    />
                    <img src="./img/searchIcon.png" alt="searchIcon" /></div>
                <div className={cls.wrapp_cart}>
                    <NavLink to="/cart"><img src="./img/cart.png" alt="cart" /> <span>{props.state.cart + ' (' + num + ')'}</span></NavLink>

                </div>
            </div>
        </div >
    )
}

