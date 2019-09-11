import React from 'react'
import {Button, Icon} from 'semantic-ui-react'

export default function Pagination({pageing,current,arow}) {
    const pagenumbers =[]
    for (let i=1 ; i<=10 ;i++){
        pagenumbers.push(i)
    }

    return (
            <nav style={{ alignItems: 'center' ,display: 'flex' , justifyContent: 'center'}}>
                {current>1 && 
            <Button 
                color= 'blue'
                onClick={()=>arow('-')}> <Icon name ='angle left'> </Icon>
            </Button>}
            {pagenumbers.map(number=> 
                <Button key={number} 
                
                color= {number===current  ?'red':'grey' } 
                 onClick={()=>pageing(number)}> {number}
                </Button>
                )}
                 {current!==10 && 
            <Button 
                color= 'blue'
                onClick={()=>arow('+')}> <Icon name ='angle right'> </Icon>
            </Button>}
            </nav>
       
    )
}
