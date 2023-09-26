import cls from './Error.module.css'

export default function Error(props) {
    localStorage.removeItem("search");
    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                <div className={cls.wrapp}>
                    <p>{props.text.error.toUpperCase()}</p>
                    <span>404</span>
                </div>
                <div className={cls.page}> {props.text.page.toLowerCase()}</div>
            </div>
        </div>
    )
}