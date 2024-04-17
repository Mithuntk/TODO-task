import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext } from './Store/Firebase/FirebaseContext';
import firebase from './Store/Firebase/FirebaseConfig';

import Context from './Store/Firebase/FirebaseContext';

ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
<Context>
<App />
</Context>
</FirebaseContext.Provider>
, document.getElementById('root'));