import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
const Container = tw.div`relative`;

const NewHeadingTitle = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center text-gray-900`;
const SingleColumn = tw.div`max-w-screen-2xl mx-auto `; //py-20 lg:py-24

const Heading = tw(
  HeadingTitle
)`mt-4 font-black text-left text-2xl sm:text-2xl lg:text-3xl text-center md:text-left leading-tight text-gray-900`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-lg text-gray-900 text-center max-w-2xl`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-red-500`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-base leading-loose text-gray-900`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;
// const SvgDotPattern1 = tw(
//   SvgDotPatternIcon
// )`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
// const SvgDotPattern2 = tw(
//   SvgDotPatternIcon
// )`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
// const SvgDotPattern3 = tw(
//   SvgDotPatternIcon
// )`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
// const SvgDotPattern4 = tw(
//   SvgDotPatternIcon
// )`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const PrimaryBackgroundContainer = tw(
  Container
)`-mx-8 px-8 bg-gray-200 text-gray-100`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      // subtitle: "Giáo Viên",
      title: "MỤC TIÊU",
      description:
        "Small description about this person/service/product/etc. It can be long up to 100 words, but any longer than that would cause the audience to scroll horizontally and skip the content. Small description about this person/service/product/etc. It can be long up to 100 words, but any longer than that would cause the audience to scroll horizontally and skip the content.",
      url: "https://timerse.com",
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
      // subtitle: "Phụ Huynh",
      title: "PHƯƠNG PHÁP",
      description:
        "Small description about this person/service/product/etc. It can be long up to 100 words, but any longer than that would cause the audience to scroll horizontally and skip the content.",
      url: "https://timerse.com",
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      // subtitle: "Loving Parent",
      title: "ĐIỂM NỔI BẬT",
      description:
        "Small description about this person/service/product/etc. It can be long up to 100 words, but any longer than that would cause the audience to scroll horizontally and skip the content.",
      url: "https://timerse.com",
    },
  ];

  return (
    <PrimaryBackgroundContainer>
      <SingleColumn>
        {/* <HeadingInfoContainer>
          <Heading></Heading>
          <HeadingDescription>
            Giá trị khác biệt của Giáo Làng nằm ở những con người đã, đang, và
            sẽ cùng bước với học sinh trong quá trình hoàn thiện tư duy tiếng
            Anh.
          </HeadingDescription>
        </HeadingInfoContainer> */}

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {/* <Link href={card.url}>See Event Details</Link> */}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      {/* <SvgDotPattern1 /> */}
      {/* <SvgDotPattern2 /> */}
      {/* <SvgDotPattern3 /> */}
      {/* <SvgDotPattern4 /> */}
    </PrimaryBackgroundContainer>
  );
};
