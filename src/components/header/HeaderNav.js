
import { NavLink } from "react-router-dom";
import cls from './HeaderNav.module.css'
import { useEffect, useRef, useState } from "react";

export default function HeaderNav(props) {

    const inpRef = useRef()

    const [inpValue, setInpValue] = useState();

    useEffect(() => {
        setInpValue(inpRef.current.value);
    }, [])

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
                        ref={inpRef}
                        onChange={props.hendlerSearch}
                        type="text" placeholder={props.state.search + '...'}
                        onKeyPress={(event) => event.key === 'Enter' ? props.hendlerSearchPush(event) : ''}
                    />
                    <button onClick={() => props.hendlerSearchClick(inpValue)}><img src="./img/searchIcon.png" alt="searchIcon" /></button>
                </div>
                <div className={cls.wrapp_cart}>
                    <NavLink to="/cart"><img src="./img/cart.png" alt="cart" /> <span>{props.state.cart + ' (' + num + ')'}</span></NavLink>

                </div>
            </div>
        </div >
    )
}

