import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { Store } from 'context';



ReactDOM.render(

   <Store>
       <App/>
   </Store>,
    document.querySelector("#root")
)