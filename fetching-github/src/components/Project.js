import React  from 'react'
import { Icon ,Item , Divider} from 'semantic-ui-react'

export default function Project(props) {
    const date=new Date()
    
    const durration=date1=> {
        let date2=new Date(date1)
        return (Math.floor((date-date2)/(1000*3600*24)))}
        
    
    const projects = props.projects.map(project=>    
    <Item.Group>
        <Item key={project.id}>
          <Item.Image  size='tiny' src={project.owner.avatar_url}/>
          <Item.Content>
            <Item.Header as='a'>{project.name}</Item.Header>
            <Item.Description>
            {project.description}
            </Item.Description>
            <Item.Extra style={{marginTop:"1em"}} >
                    <div style={{ alignItems: 'center' ,display: 'flex' }}>
                        <a href="#!">
                            <Icon name='warning' />
                            {project.open_issues_count}
                        </a>
                        <a href="#!"> 
                            <Icon name='star' />
                            {project.stargazers_count}
                        </a>
                        
                        <Item.Meta style={{marginLeft:'2em'}}> subbmitted by {project.owner.login}  {durration(project.created_at)} days ago </Item.Meta>
                    </div>
                    
            </Item.Extra>
          </Item.Content>
          <Divider />
        </Item> 
        <Divider />
    </Item.Group>  
        ) 
    return (
        <Item.Group>
            {projects}
        </Item.Group>
    )
}
