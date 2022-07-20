 import { Routes,Route,NavLink } from 'react-router-dom'
 import Wrapper from '../Wrapper/Wrapper'
 import { Sterling } from '../../Pages/Sterling/Sterling'
 import { Euro } from '../../Pages/Euro/Euro'
 import { Dollar } from '../../Pages/Dollar/Dollar'
 import Header  from "../Header/Header"
import React from 'react'

 const Navlink = () => {
    return ( 
        <Wrapper>
        <Header>
          <NavLink to='/'>USD</NavLink>
          <NavLink to='/eur'>EUR </NavLink>
          <NavLink to='/gbp'>GBP</NavLink>
        </Header>

        <Routes>
            <Route path="/" element= {<Dollar />} />
            <Route path="/eur" element= {<Euro />} />
            <Route path="/gbp" element={<Sterling />} />
        </Routes>
        </Wrapper>
    )
}

export default Navlink