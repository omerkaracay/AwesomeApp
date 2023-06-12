import * as React from 'react';
import Router from "./src/pages/Router";
import {LoginContextProvider} from "./src/contexts/LoginContext";
import Toast from 'react-native-toast-message';

function App() {
    return (
        <LoginContextProvider>
            <Router/>
            <Toast />
        </LoginContextProvider>
    );
}

export default App;
