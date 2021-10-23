const Button = ({onClick ,text, color}) => {
    return (
        <button className='btn' 
        style={{backgroundColor: color }}
        onClick={onClick}>{text}</button>
    )
}

export default Button
