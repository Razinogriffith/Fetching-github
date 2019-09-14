import React from 'react'
import { Spring } from 'react-spring/renderprops'
import img from '../react-split.png'


export default function Home() {
    return (
       <div style={{backgroundColor:'softgray'}}>
            <Spring 
            from={{marginLeft:-500}}
            to={{marginLeft:0}}
            config={{duration:1500}}>
                
                    {props=> (
                    <div style={props} >
                            <img src={img} width='100%'  alt='react-ninja'></img>
                    </div>)}
             </Spring>
            <Spring 
            from={{marginTop:-500}}
            to={{marginTop:0}}
            config={{duration:1500}}>
                
                    {props=> (
                    <div style={props} >
                        <div >
                            
                            <h1> About</h1>
                            <p>this a small webapp that will list the most starred Github repos that were created in the last 30 days. We'll be fetching the sorted JSON data directly from the Github API .</p>
                            <h1>Technlogie used</h1>
                            <p>-I used Reactjs as a front framework .</p>
                            <p>-For data fetching I used axiox library that provide a promise based HTTP client for the browser .</p>
                            <p>-simple desine using semantic ui React . </p>
                            <h1>Visulisation the data </h1>
                            <p>You can see the  github project by clicking on projects link in the navbar  </p>
                        </div>
                        
                    </div>) }
                
            </Spring>
       </div>
        
    )
}