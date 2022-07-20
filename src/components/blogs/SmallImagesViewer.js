import React from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as SvgDotPatternIcon } from "images/dot-pattern.svg";

const HeadingContainer = tw.div`text-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(
  SectionHeading
)`text-gray-900 sm:text-2xl md:text-2xl lg:text-3xl`;
const Description = tw(SectionDescription)`mx-auto`;

const CustomizeContentWithPaddingXl = styled(ContentWithPaddingXl)`py-0`;

const Posts = tw.div`mt-0 flex flex-wrap -mr-3 relative`;
const Post = tw.a`flex flex-col h-full bg-gray-200 rounded`;
const PostImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 sm:h-80 bg-center bg-cover rounded-t`}
`;
const PostText = tw.div`flex-1 px-6 py-8`;
const PostTitle = tw.h2`text-2xl font-bold group-hocus:text-gray-900 transition duration-300 text-gray-900`;
const PostDescription = tw.p``;
const AuthorInfo = tw.div`flex`;
const AuthorImage = tw.img`w-12 h-12 rounded-full mr-3`;
const AuthorTextInfo = tw.div`text-sm text-gray-900`;
const AuthorName = tw.div`font-light mt-2 text-base`;
const AuthorProfile = tw.div`pt-1 font-medium`;

const PostContainer = styled.div`
  ${tw`relative z-20 mt-10 sm:pt-3 pr-3 w-full sm:w-1/2 lg:w-1/3 max-w-sm mx-auto sm:max-w-none sm:mx-0`}

  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full sm:w-full lg:w-2/3`}
      ${Post} {
        ${tw`sm:flex-row items-center sm:pr-3`}
      }
      ${PostImage} {
        ${tw`sm:h-80 sm:min-h-full w-full sm:w-1/2 rounded-t sm:rounded-t-none sm:rounded-l`}
      }
      ${PostText} {
        ${tw`pl-8 pr-5`}
      }
      ${PostTitle} {
        ${tw`text-2xl`}
      }
      ${PostDescription} {
        ${tw`mt-4 text-sm font-semibold text-gray-600 leading-relaxed`}
      }
      ${AuthorInfo} {
        ${tw`mt-8 flex items-center`}
      }
      ${AuthorName} {
        ${tw`mt-0 text-gray-900 text-lg`}
      }
    `}
`;

//max-w-screen-lg mx-auto
//py-10 lg:py-10
const Column = tw.div`w-full max-w-2xl max-w-screen-lg mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`flex-shrink-0 relative`;
const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const MyImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded flex-shrink-0 h-80 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);

const PrimaryBackgroundContainer = tw(
  Container
)`-mx-8 px-8 bg-gray-200 text-gray-100`;

export default ({
  subheading = "",
  heading = "We love writing.",
  description = "",
  imageSrc = "",
}) => {
  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Column>
          <MyImage imageSrc={imageSrc} />
        </Column>
      </ContentWithPaddingXl>
      {/* <image src={imageSrc} /> */}
    </PrimaryBackgroundContainer>
  );
};
