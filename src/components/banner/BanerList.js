
import cls from './BanerList.module.css'

export default function BanerList(props) {

    return (
        <section className={cls.wrapper}>
            <p className={cls.text}>{props.text.toUpperCase()}</p>
            <img src={props.url} alt={props.url} className={cls.img} />
        </section>
    );
}