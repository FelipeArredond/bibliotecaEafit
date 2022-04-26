export default function Btn(props){
    return(
        <div>
            <button type={props.type} className={props.className} onClick={props.onClick}>{props.any}</button>
        </div>
    )
}