import { NavLink } from "react-router-dom";
import cls from './HeaderMain.module.css';

export default function HeaderMain(props) {
    let currentLanguage = props.currentLanguage;

    let lang = localStorage.getItem('lang');
    if (lang) {
        currentLanguage = lang;
    }

    let currMoney = props.currentMoney;

    let money = localStorage.getItem('money');
    if (money) {
        currMoney = money;
    }


    return (
        <div className={cls.container} >
            <div className={cls.wrapp_changes}>

                <div className={cls.wrapp}>

                    <span>{props.state.language + ':'}</span>
                    <select
                        className={cls.select}
                        name="language"
                        defaultValue={currentLanguage}
                        onChange={props.hendlerLangt}>
                        <option value="en">EN</option>
                        <option value="ua">UA</option>
                        <option value="ru">RU</option>
                    </select>

                </div>

                <div className={cls.wrapp}>

                    <span>{props.state.currency + ':'}</span>
                    <select
                        className={cls.select}
                        name="momey"
                        defaultValue={currMoney}
                        onChange={props.hendlerMoney}>
                        <option value="dollar">USD</option>
                        <option value="euro">EUR</option>
                        <option value="rub">RUB</option>
                        <option value="hryvnia">UAH</option>
                    </select>

                </div>
            </div>

            <div className={cls.wrapp_link}>
                <NavLink to='/login'>{props.state.log}</NavLink>
                <NavLink to='/registration'>{props.state.sign}</NavLink>
            </div>
        </div >
    )
}

