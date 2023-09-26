
import cls from './Banner.module.css'

import BanerList from './BanerList'

export default function Banner(props) {

    return (
        <div className={cls.container}>
            <div className={cls.wpar_button}>
                <div className={cls.buttons}>
                    <button className={cls.buttonLeft} onClick={() => props.changeSlide(-1)} >{'<'}</button>
                    <button className={cls.buttonRight} onClick={() => props.changeSlide(1)} >{'>'}</button>
                </div>
            </div>
            <div className={cls.wrapp_slider}>
                <div className={cls.slider}
                    style={{ transform: `translateX(-${props.slideNumber * 100}%)` }}>
                    {props.items.map(e => < BanerList key={'key-' + e.url} url={e.url} text={e.text} />)}
                </div>
            </div>

        </div>
    );
}