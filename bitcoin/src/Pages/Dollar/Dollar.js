
import React from 'react'
import List from '../../Components/List/List'
import Wrapper from '../../Ui/Wrapper/Wrapper'


export const Dollar = () => {
 
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(data=>data.json())
.then(res=>console.log(res))
  return (
      <Wrapper>
        <List>
          
        </List>
      </Wrapper>
  )
}
