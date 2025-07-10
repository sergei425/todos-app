import './style.scss'

export default function Title({name, caption}) {
    return <h2 className={name}>{caption}</h2>
}