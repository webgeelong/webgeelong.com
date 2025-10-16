import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';
import CalendlyEmbed from 'components/CalendlyEmbed';

export default function Hero() {

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Web Development & AI Solutions for Modern Businesses</CustomOverTitle>
        <Heading>Transform Your Business with Custom Web Solutions</Heading>
        <Description>
          We build high-performance websites and intelligent AI agents that drive real business results.
          From responsive web applications to automated workflows, we help businesses in Geelong and beyond
          scale faster and work smarter with cutting-edge technology.
        </Description>
        <CustomButtonGroup>
          <Button>
            <CalendlyEmbed /> <span>&rarr;</span>
          </Button>
        </CustomButtonGroup>
      </Contents>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  padding-bottom: 8rem;
  min-height: 70vh;

  ${media('<=desktop')} {
    padding-top: 4rem;
    padding-bottom: 4rem;
    min-height: 60vh;
  }
`;

const Contents = styled.div`
  max-width: 80rem;
  text-align: center;
  width: 100%;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
  justify-content: center;
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 70rem;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
