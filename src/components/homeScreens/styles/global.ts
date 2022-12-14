import { createGlobalStyle } from "styled-components";

export const GlobalHomeStyle = createGlobalStyle`
    :root {
        --background: #121214;
        --bkg: #202024;
        --blue: #323fcb;

        --purple: #6933ff;
        --text-body: #363f5f;
        --gray: #7C7C8A;
        
        --shape: #FFFFFF;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
`;
