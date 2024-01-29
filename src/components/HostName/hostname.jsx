import styled from 'styled-components';

const UserName = styled.div`
    color:#FF6060;
    font-weight: 500;
    font-size: 12px;
    margin-right: 10.5px;
    white-space: pre-wrap;
    line-height: 142.6%;
    @media all and (min-width: 1100px) {
        font-size: 18px;
    }
`;
const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  justify-content:center;
`;
const HostName = ({ name }) => {
  const [firstName, lastName] = name.split(' ')
  return (
    <UserNameContainer>
      <UserName>{firstName}</UserName>
      <UserName>{lastName}</UserName>
    </UserNameContainer>
  )
};

export default HostName;