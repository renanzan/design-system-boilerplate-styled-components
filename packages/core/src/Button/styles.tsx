import styled from "styled-components";

export const Button = styled.button`
   cursor: pointer;
   border: none;
   padding: 8px 16px;
   border-radius: 4px;
   background: red;
   color: white;
   transition: 250ms;

   :hover {
      filter: brightness(0.95);
   }
`;