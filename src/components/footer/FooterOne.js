import changeMoney from '../../helreps/changeMoney';
import cls from './FooterOne.module.css';

export default function FooterOne(props) {
    let currMoney = props.currentMoney;

    let money = localStorage.getItem('money');
    if (money) {
        currMoney = money;
    }

    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                <img src="./img/emblem/car.png" alt="car" />
                <span>{props.text.car}{' '}{props.money}{' '}{changeMoney(currMoney, 100)}</span>
            </div>
            <div className={cls.wrapper}>
                <img src="./img/emblem/phone.png" alt="phone" />
                <span>{props.text.phone} - 555-555-555</span>
            </div>
        </div>
    )
}

