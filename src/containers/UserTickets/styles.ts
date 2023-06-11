import styled from 'styled-components'

export const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   width: 85%;
   padding-left: 6em;
   gap: 1.2em;
   margin-bottom: 4.88em;

   @media (max-width: 768px) {
      align-items: center;
      padding-left: 0;
      width: 100%;
      margin-bottom: 0;
      padding-top: 0;
      
   }

`
