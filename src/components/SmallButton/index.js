import style from "../../../styles/smallbutton.module.css"

export default function SmallButton({text}){
    return(<button className={style.button}>{text}</button>)
}