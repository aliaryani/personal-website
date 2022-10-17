
import React, { useRef } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/modules/Contact'
import Intro from '../components/modules/Intro'
import Projects from '../components/modules/Projects'
import Skills from '../components/modules/Skills'
import Layout from '../components/ui/Layout'
import styles from '../styles/Home.module.css'



export default function Home() {
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);
  

  const handleClick = (key) => {
    if(key==="projects"){
      projects.current?.scrollIntoView({behavior: 'smooth'});

    }else if(key==="skills"){
      skills.current?.scrollIntoView({behavior: 'smooth'});

    }else if(key==="contact"){
      contact.current?.scrollIntoView({behavior: 'smooth'});
    }

  };

  return (

   <Layout>

    <Intro handleClick={handleClick}/>
    <div  ref={projects}><Projects /></div>
    
    <div ref={skills} > <Skills handleClick={handleClick}/></div>

   
   <div ref={contact}>
   <Contact />
   </div>
   </Layout> 

   
  )
}
