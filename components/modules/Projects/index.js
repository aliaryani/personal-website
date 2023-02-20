import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Items from "./Items";


const data=[{id:6,title:"Enclosures arch",image:"/enclosuresarch.PNG",path:"https://enclosuresarch.vercel.app/"},{id:0,title:"Monitoring",image:"/ping.PNG",path:"https://www.ping24.net/portal/"},
{id:1,title:"Dental Clinic",image:"/dental.PNG",path:"http://smoderndental.com/"},
{id:2,title:"Design/construction Company",image:"/solid.PNG",path:"http://www.solidmgt.com/"}
,{id:3,title:"Personal website",image:"/kymhia.PNG",path:"https://kimiamoradian.ir/"}
,{id:4,title:"Architects",image:"/javad.PNG",path:"https://javadkalantariarchitects.com/"},
{id:5,title:"Online Shop",image:"/zetto.PNG",path:"https://zetto.ir/"}
]

const Projects = () => (
    <Container > 
        <h1>Projects</h1>
  <Grid container spacing={3}>
  {data?.map(item=>(
    
        <Grid item md={4} key={data.id}>
            <Items item={item}/>
            </Grid>
  ))}
   </Grid>
   </Container> 
);

export default Projects;
