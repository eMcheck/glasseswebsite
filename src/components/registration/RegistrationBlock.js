import cls from './RegistrationBlock.module.css';

export default function RegistrationBlock(props) {

    const authHendler = (event) => {
        event.preventDefault()
        let e = event.target;
        if (e.login.value.trim() === '') return alert(props.text.enter + ' ' + props.text.login)
        if (e.email.value.trim() === '') return alert(props.text.enter + ' ' + props.text.email)
        if (e.pass.value.trim() === '') return alert(props.text.enter + ' ' + props.text.password)
        if (e.pass.value.trim() !== e.pass2.value.trim()) {
            alert(props.text.not)
        } else {
            alert('registered')
        }
    }

    return (
        <div className={cls.container}>

            <form onSubmit={authHendler} className={cls.wrapper}>
                <input type="text" name='login' placeholder={props.text.login.toUpperCase()} autoFocus={true} />
                <input type="text" name='email' placeholder={props.text.email.toUpperCase()} />
                <input type="password" name='pass' placeholder={props.text.password.toUpperCase()} />
                <input type="password" name='pass2' placeholder={props.text.passwordConfirm.toUpperCase()} />
                <button type="submit" className={cls.btn_form}>{props.text.btn}</button>
            </form>

        </div>
    )
}

