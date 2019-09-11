import React, {useState,useEffect}  from 'react'
import axios from 'axios'
import { Segment, Loader, Dimmer, Message,Header } from 'semantic-ui-react'
import Project from '../components/Project';
import Pagination from '../components/pagination';
import  {endpoint} from '../constants'


export default function ListPorjects() {
    const [projects, setprojects] = useState([]);
    const [loading, setloading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [error, seterror] = useState(null);
    const arowParging = type => type==='+' ?  setcurrentPage(currentPage+1) : setcurrentPage(currentPage-1)
    const pageing =number =>{setcurrentPage(number)}
    const fetchdata =pagenumber =>{
        setloading(true)
        axios.get(`${endpoint}${pagenumber}`)
        .then(res=> {
            setprojects(res.data.items)
            setloading(false)
        })
        .catch(err=>{
            seterror(err)
            setloading(false)
            })
    }

    useEffect(() => {
        fetchdata(currentPage)
    }, [currentPage])
    return (
        <Segment >
            <Header as='h1' style={{ marginBottom :'2em',  textAlign: 'center'}} >List of gitHub Repositorys in  page number {currentPage}</Header>
            {loading ? <Segment>
                    <Dimmer active inverted >
                        <Loader inverted content='Loading' />
                    </Dimmer>
                </Segment>:  error ? <Message negative>
                    <Message.Header><p>{JSON.stringify(error)}</p></Message.Header>
                </Message>: 
                <spam>
                <Project projects={projects}/> 
                <Pagination 
                pageing={pageing}
                current={currentPage}
                arow={arowParging}
                />
                </spam>
            }  
            </Segment>
        )}
        

