import BannerTitre from "../../components/BannerTitre/bannerTitre";
import aboutCover from "../../assets/about_cover.png"
import styled from 'styled-components'
import Collapse from "../../components/Collapse/collapse";

const information = [
    {
      id: '1',
      title: 'Fiabilité',
      description:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      id: '2',
      title: 'Respect',
      description:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      id: '3',
      title: 'Service',
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: '4',
      title: 'Sécurité',
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

const StyledContainer = styled.div`
  margin: 19px 0;
  @media all and (min-width: 1100px) {
    margin: 31px 0;
    padding: 0 100px;
  }
`

const About = () =>  {
  return (
    <>
        <BannerTitre img={aboutCover} title="A propos" />
        <StyledContainer>
            {information.map((info) => (
                <Collapse title={info.title} description={info.description} />
            ))}
        </StyledContainer>
    </>
  );
};

export default About;
