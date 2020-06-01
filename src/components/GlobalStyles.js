import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
.site-layout .site-layout-background{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;

    .timeline-item-content {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    }

    .site-layout .site-layout-header {  
    background: ${({ theme }) => theme.body};
    }
    a{
        color: ${({ theme }) => theme.text};
    }
    .site-layout .site-layout-header {
        background: ${({ theme }) => theme.body};
    }
    .responsive-headline{
        color: ${({ theme }) => theme.text};
        text-shadow: 
    0 0 0.033em pink, 
    0 0 0.08em pink,
    0 0 0.1em blue, 
    0 0 0.2em rebeccapurple, 
    0 0 0.3em rebeccapurple, 
    0 0 1em rebeccapurple,
    0 0 1.5em rebeccapurple;
    }
    
    h2, h3, h4, h5, h6{
        color: ${({ theme }) => theme.text};
        text-shadow: 
    0 0 0.033em purple, 
    0 0 0.08em purple,
    0 0 0.1em pink, 
    0 0 0.2em pink, 
    0 0 0.3em pink, 
    0 0 1em pink,
    0 0 1.5em pink;
    }
    }
    }
        

    `



