
import cls from './FooterTwo.module.css';

export default function FooterTwo(props) {

    return (
        <div className={cls.container}>
            <div className={cls.wrapp}>
                <div className={cls.wrapp_fb}>
                    <div >FACEBOOK</div>
                    <div className={cls.fb_icon}>
                        <span>20000 Members</span>
                        <img src="./img/emblem/facebook.png" alt="facebook" />
                    </div>
                    <div className={cls.fb_photo}>
                        <img src="./img/persone/p1.png" alt="persone" />
                        <img src="./img/persone/p2.png" alt="persone" />
                        <img src="./img/persone/p3.png" alt="persone" />
                        <img src="./img/persone/p4.png" alt="persone" />

                        <img src="./img/persone/p4.png" alt="persone" />
                        <img src="./img/persone/p3.png" alt="persone" />
                        <img src="./img/persone/p1.png" alt="persone" />
                        <img src="./img/persone/p2.png" alt="persone" />
                    </div>
                    <div className={cls.fb_i}>facebook Social plugin</div>
                </div>
            </div>
            <div className={cls.wrapp}>
                <div className={cls.wrapp_twit}>
                    <div>TWITTER</div>
                    <div className={cls.twit}>
                        <img src="./img/emblem/twitter.png" alt="facebook" />
                        <p>Lorem Ipsum is simply dummy text of the printing and <span>typesetting industry. Lorem Ipsum </span> has been the industry's standard</p>
                    </div>
                    <div className={cls.twit}>
                        <img src="./img/emblem/twitter.png" alt="twitter" />
                        <p>Lorem Ipsum is simply dummy text of the printing and <span>typesetting industry. Lorem Ipsum </span> has been the industry's standard</p>
                    </div>

                </div>
            </div>
            <div className={cls.wrapp}>
                <div className={cls.wrapp_info}>
                    <div>{props.text.info.toUpperCase()}</div>
                    <div className={cls.info}>
                        <ul>
                            <li>Sed ultrices purus non.  </li>
                            <li>sodales sodales. </li>
                            <li>Curabitur pretium dui vitae.</li>
                            <li>Donec gravida mi in nisl.</li>
                            <li>faucibus leo condimentum.</li>
                            <li>Donec et lorem suscipit.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cls.wrapp}>
                <div className={cls.wrapp_contact}>
                    <div>{props.text.contact.toUpperCase()}</div>
                    <div className={cls.contact}>
                        <span>Leo Store  </span>
                        <span>Leopards media</span>
                        <span>KVM Rpad, 4590GH</span>
                        <span> +1 489-8888-0099</span>
                        <span>mail@mail.com</span>
                    </div>
                    <div className={cls.contact_img}>
                        <img onClick={() => {
                            window.location.href = 'https://www.google.com/';
                        }} src="./img/emblem/google.png" alt="google" />
                        <img onClick={() => {
                            window.location.href = 'https://www.linkedin.com/in/emcheck/';
                        }} src="./img/emblem/linkedin.png" alt="linkedin" />
                        <img src="./img/emblem/wi.png" alt="wi" />
                        <img src="./img/emblem/fb.png" alt="facebook" />
                    </div>
                </div>
            </div>
        </div>
    )
}

