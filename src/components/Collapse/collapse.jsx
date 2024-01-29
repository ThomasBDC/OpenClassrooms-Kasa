import styled from 'styled-components';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

const TitleCollapse = styled.div`
    position:relative;
    top: 0;
    z-index: 1;
    padding:15px 20px;
    background-color:#FF6060;
    color:white;
    font-weight:500;
    display:flex;
    justify-content: space-between;
    align-items:center;
    font-size:24px;
    border-radius:5px;
`;

const ContentCollapse = styled.div`
    position:relative;
    color:black;
    overflow:hidden;
    transition: 0.5s;
    transform: translateY(${(props) => props.isOpen ? "0" : "-100%"});
    max-height: ${(props) => props.isOpen ? "99em" : "0px"};
    z-index:-1;
    width:100%;
    padding: 15px 20px;
    border-radius:5px;
    background-color:#F6F6F6;
    box-sizing: border-box;
    > div{
        transition: 1s;
        transform: translateY(${(props) => props.isOpen ? "0" : "-100%"});
        max-height: ${(props) => props.isOpen ? "99em" : "0px"};
    }
`;

const CollaspeContainer = styled.div`
    overflow:hidden;
    margin-bottom: ${(props) => props.isOpen ? "15px" : "0px"};
`;


const CollapseArrow = styled.img`
    width: 21px;
    height: 15px;
    transition: 1s;
    transform: rotate(${(props) => props.isOpen ? "180deg" : "0deg"});    

    &:hover{
        cursor:pointer;
    }
`;

const Collapse = ({title, description}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <CollaspeContainer isOpen={isOpen}>
            <TitleCollapse>
                {title}
                <CollapseArrow src={arrow} onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
            </TitleCollapse>
            <ContentCollapse isOpen={isOpen}>
                <div dangerouslySetInnerHTML={{__html: description}}></div>
            </ContentCollapse>
        </CollaspeContainer>
    )
};

export default Collapse;