import cls from './AuthBlock.module.css';

export default function AuthBlock(props) {

    const authHendler = (event) => {
        event.preventDefault()
        let e = event.target;
        if (e.login.value.trim() === '') return alert(props.text.enter + ' ' + props.text.login)
        if (e.pass.value.trim() === '') return alert(props.text.enter + ' ' + props.text.password);
        alert('Hello ' + e.login.value.toUpperCase())

    }

    return (
        <div className={cls.container}>

            <form onSubmit={authHendler} className={cls.wrapper}>
                <input type="text" name='login' placeholder={props.text.login.toUpperCase()} autoFocus={true} />
                <input type="password" name='pass' placeholder={props.text.password.toUpperCase()} />
                <button type="submit" className={cls.btn_form}>{props.text.btn.toUpperCase()}</button>
            </form>

        </div>
    )
}

