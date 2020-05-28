import {HomePage} from './containers'
import { Timeline } from './containers'
import {Contact} from './containers'

const routes = [
    {
        title:"Home Page",
        path:"/",
        exact: true,
        component: HomePage
    },
    {
        title:"Timeline",
        path:"/timeline",
        exact: false,
        component: Timeline
    },
    {
        title:"Contact",
        path:"/contact",
        exact: false,
        component: Contact
    }
]


export default routes