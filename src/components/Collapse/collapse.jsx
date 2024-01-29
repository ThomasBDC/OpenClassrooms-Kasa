import styled from 'styled-components';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

const TitleCollapse = styled.div`
    position:relative;
    width:100%;
    padding:15px 20px;
    background-color:#FF6060;
    color:white;
    font-weight:500;
    display:flex;
    justify-content: space-between;
    align-items:center;
    font-size:24px;
    border-radius:5px;
    z-index:2;
`;

const ContentCollapse = styled.div`
    position:relative;
    background-color:white;
    color:black;
    overflow:hidden;
    transition: transform 1s;
    transform: translateY(${(props) => props.isOpen ? "0" : "-100%"});
    max-height: ${(props) => props.isOpen ? "100%" : "0"};
    margin-bottom: ${(props) => props.isOpen ? "15px" : "0px"};
    z-index:-1;
    width:100%;
    padding: 15px 20px;
    border-radius:5px;
    background-color:#F6F6F6;
    overflow:hidden;
`;

const CollaspeContainer = styled.div`
    position:relative;
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
        <CollaspeContainer>
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