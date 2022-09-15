import { FetchMock } from '@react-mock/fetch';
import React from "react";
import App from "./App";


export default () =>
    <FetchMock options={{ matcher: 'path:/api/sample', response: { value: 'FROM_Fixture' } }}>
        <App/>
    </FetchMock>
;
