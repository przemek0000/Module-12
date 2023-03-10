import styled from "styled-components";
import background from "./atmMachine.png"

export const StyledContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    background-image: url("${background}");
    background-position: top;
    background-position-y: -30px;
    background-repeat: no-repeat;
    background-color: white;
    background-attachment:fixed;

    @media(max-width: 767px) {
       margin: 0px 5px
    }
`;