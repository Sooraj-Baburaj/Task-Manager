import Button from "./Button"

const Header = ({onAdd , showAdd}) => {
    return (
        <header className='header'>
            <h1>Task Manager </h1>
            <Button onClick={onAdd} color={showAdd ? 'red' : 'black'} text={showAdd ? 'Close' : 'Add'}/>
        </header>
    )
}

export default Header
