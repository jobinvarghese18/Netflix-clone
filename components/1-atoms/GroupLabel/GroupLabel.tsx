
interface Props {
    label: String;
}
export const GroupLabel = (props:Props) =>{
    const { label } = props;
    return(
        <div> { label }</div>
    )
}