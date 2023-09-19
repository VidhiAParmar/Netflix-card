import React from 'react';
import Card from './Cards';
import SData from './SData';


const App = ()=>(
  <>
    <h1 className='heading_style'> The Netflix Series </h1>
    {SData.map((val)=>{
       return(
        <Card
        key={val.id}
        imgsrs={val.imgsrs}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
      );
      })
    }
  </>
);

export default App;
