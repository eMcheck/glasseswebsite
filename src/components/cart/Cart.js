import { useState, useEffect } from 'react';
import cls from './Cart.module.css';
import changeMoney from '../../helreps/changeMoney';

export default function Cart(props) {
    let currMoney = props.currentMoney;

    let money = localStorage.getItem('money');
    if (money) {
        currMoney = money;
    }

    let temp = []

    for (let goods in props.cart) {
        let tempGood = {};
        props.goods.forEach(e => {
            if (e.id === goods) {
                tempGood["id"] = e.id;
                tempGood["image"] = e.imgURL;
                tempGood["title"] = e.title;
                tempGood["price"] = +e.price;
                tempGood["quantity"] = props.cart[e.id];
                tempGood["sum"] = e.price * props.cart[e.id]
            }
        });
        temp.push(tempGood);
    }

    return (
        <> {

            props.isEmpry ? (
                <div className={cls.container_empty}>
                    <h1>{props.text.empty.toUpperCase()}</h1>
                </div>
            ) : (
                <div >
                    {temp.map(e => {
                        return (
                            <div className={cls.container_cart} key={e.id}>
                                <div className={cls.wrapp_cart} >
                                    <div className={cls.wrapp_img}>
                                        <img src={e.image} alt={e.id} />
                                    </div>
                                    <div className={cls.wrap_title}>
                                        <span>{e.title}</span>
                                    </div>
                                    <div className={cls.wrap_price}>
                                        <p>{props.text.price}:</p>
                                        <span>{props.money}{' '}{changeMoney(currMoney, e.price)}</span>
                                    </div>
                                    <div className={cls.wrap_quantity}>
                                        <p>{props.text.quantity}:</p>
                                        <span>{e.quantity}</span>
                                    </div>
                                    <div className={cls.wrap_sum}>
                                        <p>{props.text.sum}:</p>
                                        <span>{props.money}{' '}{changeMoney(currMoney, e.sum)}</span>
                                    </div>
                                    <div>
                                        <button className="minus-cart" data-key={e.id}>-</button>
                                        <button className="add-cart" data-key={e.id}>+</button>
                                        <button className="delete-cart" data-key={e.id}>X</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                    <div className={cls.container_total}>
                        <div className={cls.wapp_total}>
                            <p>{props.text.total}:</p>
                            <span>{props.money}{' '}{changeMoney(currMoney, temp.reduce((accumulator, currentValue) => accumulator + currentValue.sum, 0))}</span>
                            <button onClick={() =>
                                alert(`${props.text.pay.toUpperCase()} ${props.money} ${changeMoney(currMoney, temp.reduce((accumulator, currentValue) => accumulator + currentValue.sum, 0))}`
                                )}>{props.text.buy.toUpperCase()}</button>
                        </div>

                    </div>
                </div >
            )

        }

        </>
    )
}

