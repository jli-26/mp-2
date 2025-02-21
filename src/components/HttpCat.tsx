import styled from "styled-components";

const Image = styled.img`
    margin: 1rem;
    padding: 2rem;
    width: 80rem
`;

export default function HttpCat({ statusCode }: { statusCode: number }) {
    return (
        <Image
            src={`https://http.cat/${statusCode}`}
            alt={`HTTP Cat with status code ${statusCode}`}
        />
    );
}
