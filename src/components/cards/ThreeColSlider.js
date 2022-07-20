import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
// import { ReactComponent as Student } from "feather-icons/dist/icons/student.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as StudentIcon } from "../../../src/images/student.svg";
import { ReactComponent as HatIcon } from "../../../src/images/hat.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-lg mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)`text-gray-900 text-3xl`;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-80 sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-row sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl text-gray-900 font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm text-gray-900 leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col mt-2 sm:mt-4`; //sm:flex-row
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full mt-2 p-2 bg-yellow-500 text-gray-100`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "IELTS Cơ Bản",
      description:
        "Làm quen với kỳ thi thông qua các bài học được soạn thảo bời Giáo Làng, nhằm tối ưu khả năng học tập của học sinh sau này. Tập trung đánh vào những yếu tố then chốt trong việc học IELTS: Tuy duy ngôn ngữ và Tư duy phản biện.",
      locationText: "Độ tuổi: 12-15",
      pricingText: "Độ khó: Cơ Bản",
      rating: 4.9,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
      title: "IELTS Intermediate",
      description:
        "Description should be written here. Not too long, but not too short. Làm quen với kỳ thi thông qua các bài học được soạn thảo bời Giáo Làng,///",
      locationText: "Độ tuổi: 14-17",
      pricingText: "Độ khó: Trung Bình",
      rating: "5.0",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1598981457915-aea220950616?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1793&q=80",
      title: "IELTS Advanced",
      description:
        "Làm quen với kỳ thi thông qua các bài học được soạn thảo bời Giáo Làng, nhằm tối ưu khả năng học tập của học sinh sau này. Tập trung đánh vào những yếu tố then chốt trong việc học IELTS: Tuy duy ngôn ngữ và Tư duy phản biện.",
      locationText: "Độ tuổi: 16+",
      pricingText: "Độ khó: Nâng Cao",
      rating: 4.5,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Post-Advanced",
      description:
        "Làm quen với kỳ thi thông qua các bài học được soạn thảo bời Giáo Làng, nhằm tối ưu khả năng học tập của học sinh sau này. Tập trung đánh vào những yếu tố then chốt trong việc học IELTS: Tuy duy ngôn ngữ và Tư duy phản biện.",
      locationText: "Độ tuổi: 16+",
      pricingText: "Độ khó: Nâng Cao",
      rating: 4.5,
    },
  ];

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>CÁC KHÓA HỌC</Heading>
          {/* <span>Kéo sang phải để xem thêm</p> */}
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  {/* <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo> */}
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <StudentIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <HatIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>Tìm hiểu thêm</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
