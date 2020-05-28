import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';
import routes from '../routes'

const { Content } = Layout;


const Body = () => {
    return (
        <>
            <Content className="site-layout-background">
                <Switch>
                    {
                        routes.map((route)=>{
                            return <Route 
                            path={route.path} 
                            exact={route.exact} 
                            component={route.component}/>
                        })
                    }
                    
                </Switch>
            </Content>
        </>
    )
}

export default Body
