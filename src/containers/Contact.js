import React from 'react'
import { ContactItems } from '../components'

const Contact = () => {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="soc">
                    <ContactItems />
                </div>
            </div>
        </>
    )
}

export default Contact 