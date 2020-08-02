import React from 'react';
import Menu from './menu';
import "../styles.css";

const Layout = ({
    title = 'Title',
    discription = "",
    className,
    children}) => ( 
<div>

<Menu/>
<div className="jumbotron">
<h2>{title}</h2>
<h4 className="lead">{discription}</h4></div>
<div className={className}>{children}</div>

</div>
)

export default Layout;