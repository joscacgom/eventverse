import styled from 'styled-components'

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 5rem;
`

export const Loader = styled.div`
   position: relative;
    width: 85px;
    height: 50px;
    background-repeat: no-repeat;
    background-image: linear-gradient(${({ theme }) => theme.nord.black0} 50px, transparent 0),
                      linear-gradient(${({ theme }) => theme.nord.black0} 50px, transparent 0),
                      linear-gradient(${({ theme }) => theme.nord.black0} 50px, transparent 0),
                      linear-gradient(${({ theme }) => theme.nord.black0} 50px, transparent 0),
                      linear-gradient(${({ theme }) => theme.nord.black0} 50px, transparent 0),
                      linear-gradient(${({ theme }) => theme.nord.black0} 50px, transparent 0);
    background-position: 0px center, 15px center, 30px center, 45px center, 60px center, 75px center, 90px center;
    @keyframes rikSpikeRoll {
        0% { background-size: 10px 3px;}
        16% { background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
        33% { background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
        50% { background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px}
        66% { background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px}
        83% { background-size: 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px, 10px 3px}
        100% { background-size: 10px 3px, 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px}
    }
    
    animation: rikSpikeRoll 0.65s linear infinite alternate;
`
