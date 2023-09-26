import { NavLink } from "react-router-dom";
import cls from './Goods.module.css';
import { useEffect } from "react";
import changeMoney from '../../helreps/changeMoney'

export default function Goods(props) {
    let currMoney = props.currentMoney;

    let money = localStorage.getItem('money');
    if (money) {
        currMoney = money;
    }


    return (
        <div className={cls.container}>
            <div className={cls.wrapp}>
                <div><img
                    src={props.goods.imgURL}
                    alt={props.goods.gender}
                    className={cls.img}
                /></div>
                <div className={cls.wrapp_price}>
                    <div className={cls.price}>
                        <div><span>{props.goods.title}</span></div>
                        <div className={cls.money}><span>{props.money}{' '}{changeMoney(currMoney, +props.goods.price)}</span></div>
                    </div>
                    <button
                        data={props.goods.id}
                    ><img src="./img/cart.png" alt="cart" data={props.goods.id} className={`add-cart ${cls.cartAnim}`} /></button>
                </div>
            </div>
        </div >
    )
}

