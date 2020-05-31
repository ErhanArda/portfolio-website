import React, { useState, useEffect } from 'react'

const About = ({ resumeData }) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return (
        <>

            {isLoading ?
                <h1>Welcome Everybody</h1> :
                <div>
                    <div className="logo">
                    <div className="logo-text">
                        <h1 className="logo-title">Hi, I'm {resumeData.name}.</h1>
                    </div>
                </div>
                <div className="home">
                    <div className="row banner">
                        <div className="banner-text">
                            <h3 style={{ color: 'black', fontFamily: 'sans-serif ' }}>I am a {resumeData.role}.{resumeData.roleDescription}</h3>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="home">
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">Hi, I'm {resumeData.name}.</h1>
                            <h3 style={{ color: 'black', fontFamily: 'sans-serif ' }}>Hi,I am a {resumeData.role}.{resumeData.roleDescription}</h3>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default About
