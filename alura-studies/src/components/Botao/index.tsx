import style from './Botao.module.scss'

interface BotaoProps {
    children: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const { type = "button", onClick } = props

    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {props.children}
        </button>
    )
}