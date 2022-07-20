
 import './Header.css'

const Header =(props)=>{
    return ( 
       <header className={props.className}>
        {props.children}
        </header>
    )
}

export default Header