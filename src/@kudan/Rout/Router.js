import React from 'react';

const Home = React.lazy(()=>import('../../resource/pages/Dashboard'));
const List = React.lazy(()=>import('../../resource/pages/video'));

const Route = [
    {name:'Home',routname:'Home',component:Home},
    {name:'Video',routname:'List',component:List}
]

export default Route;