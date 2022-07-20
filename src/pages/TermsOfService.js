import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-2 `;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default ({ headingText = "Giáo Làng là một tổ chức như thế nào?" }) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingRow>
          <Heading>{headingText}</Heading>
        </HeadingRow>
        <Text>
          <h1>Triết lý giáo dục</h1>
          <p>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service. Your access to and use of the
            Service is conditioned on Your acceptance of and compliance with
            these Terms and Conditions. These Terms and Conditions apply to all
            visitors, users and others who access or use the Service.
          </p>

          <h1>Phương thức giảng dạy</h1>
          <p>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service. Your access to and use of the
            Service is conditioned on Your acceptance of and compliance with
            these Terms and Conditions. These Terms and Conditions apply to all
            visitors, users and others who access or use the Service.
          </p>
        </Text>
      </ContentWithPaddingXl>
    </Container>
  );
};
