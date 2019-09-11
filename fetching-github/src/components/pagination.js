import React from 'react'
import {Button} from 'semantic-ui-react'

export default function Pagination({Pageing,current}) {
    const pagenumbers =[]
    for (let i=1 ; i<=10 ;i++){
        pagenumbers.push(i)
    }

    return (
            <nav style={{ alignItems: 'center' ,display: 'flex' , justifyContent: 'center'}}>
            {pagenumbers.map(number=> 
                <Button key={number} 
                
                color= {number===current  ?'red':'grey' } 
                 onClick={()=>Pageing(number)}> {number}
                </Button>
                )}
            </nav>
       
    )
}
