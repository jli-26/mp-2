import styled from "styled-components";
import { useState } from "react";
import HttpCat from "./components/HttpCat.tsx";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ParentDiv = styled.div`
    width: 100%;
    margin: auto;
    justify-content: center;
    text-align: center;
    border: 5px darkgoldenrod solid;
`;

export default function App() {
    const [statusCode, setStatusCode] = useState<number>(200);

    return (
        <Wrapper>
            <ParentDiv>
                <h1>HTTP Cat Viewer </h1>
                <p>Enter an HTTP status code to see the corresponding cat image!</p>
                <input
                    type="number"
                    value={statusCode}
                    onChange={(e) => setStatusCode(Number(e.target.value))}
                    placeholder="Enter status code"
                />
                <HttpCat statusCode={statusCode} />
            </ParentDiv>
        </Wrapper>
    );
}
