import React from 'react';
import Menu from './menu'

const Layout = ({
    title = 'Title',
    discription = "Description",
    className,
    children}) => ( 
<div>

<Menu/>
<div className="jumbotron">
<h2>{title}</h2>
<p className="lead">{discription}</p>
    </div>

<div className={className}>{children}</div>

</div>
)

export default Layout;