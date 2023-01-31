import React, { useEffect, useState } from 'react';
import "./Progress.css";

const Circle = ({className, children}) => {
  const [circles, setCircles] = useState ([]);

  useEffect( ()=>{
    fetch('circleData.json')
    .then(res => res.json())
    .then(data => setCircles(data));
  } ,[circles, setCircles])
  return (
    <div>

    <div className={className}>{children}</div>
    
   
    {/* {
                    circles.map(circle => <p
                        key={circle._id}
                        circle={circle}
                    >{circle.title}</p>)
                   
                }
     */}
   
    </div>
  );
};

export default Circle;