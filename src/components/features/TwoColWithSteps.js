import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
// import TeamIllustrationSrc from "images/team-illustration-2.svg";
import Teacher from "images/teacher.png";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-lg mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left font-display`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-2xl sm:text-2xl lg:text-3xl text-center md:text-left leading-tight text-gray-900`;

const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-900`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold text-gray-900`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-base text-gray-900 font-medium`;
const MyImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
//md:w-1/2 lg:w-5/12 xl:w-1/3

export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  // imageSrc = Teacher,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Lớp học xoay quanh học sinh",
      description:
        "Hôm nay tôi rất vui mừng chào đón 60 các thầy cô giáo tiêu biểu đại diện cho đội ngũ cán bộ quản lý giáo dục và giáo viên trên cả nước.",
    },
    {
      heading: "Phát triển ngôn ngữ tự nhiên",
      description:
        "Tư duy của mỗi học sinh cần được phát triển để hội nhập với thời đại.",
    },
    {
      heading: "Giáo Dục là làm mới tư duy",
      description:
        "Tư duy của mỗi học sinh cần được phát triển để hội nhập với thời đại.",
    },
  ];

  if (!steps) steps = defaultSteps;

  return (
    <div id="#gll">
      <Container>
        <TwoColumn>
          <ImageColumn>
            <MyImage imageSrc="https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80" />
            {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />}
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Subheading> {subheading}</Subheading>
              <Heading>{heading}</Heading>
              <Steps>
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepNumber>
                      {(index + 1).toString().padStart(2, "0")}
                    </StepNumber>
                    <StepText>
                      <StepHeading>{step.heading}</StepHeading>
                      <StepDescription>{step.description}</StepDescription>
                    </StepText>
                  </Step>
                ))}
              </Steps>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
    </div>
  );
};
