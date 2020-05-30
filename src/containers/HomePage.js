import React from 'react'
import {About} from '../components'
import { Container } from 'reactstrap'
import resumeData from '../resumeData'
const HomePage = () => {
    return (
        <Container>
            <About resumeData={resumeData}/>
        </Container>
    )
}

export default HomePage
