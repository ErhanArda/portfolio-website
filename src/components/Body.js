import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';
import { ThemeProvider } from "styled-components";
import routes from '../routes'
import { GlobalStyles } from "../components/GlobalStyles";
import { lightTheme, darkTheme } from "../components/Theme"
import {Button,Toggle} from './Toggler'


import  {useDarkMode} from "./useDarkMode"

const { Content } = Layout;


const Body = () => {

    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;


 

    return (
        <>
            <Content className="site-layout-background">
                <Switch>
                <ThemeProvider theme={themeMode}>                        <>
                            <GlobalStyles />
                            <Toggle theme={theme} toggleTheme={themeToggler} />
                            {
                                routes.map((route) => {
                                    return <Route
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.component} />
                                })
                            }
                        </>
                    </ThemeProvider>
                </Switch>
            </Content>
        </>
    )
}

export default Body
