import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

//max-w-sm: width of the heading description: small
const HeadingDescription = tw.p`mt-4 text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-medium text-gray-100 text-center `;

const PrimaryAction = tw.h2`px-8 py-3 mt-10 text-sm sm:text-sm lg:text-sm xl:text-2xl`;
//sm:mt-16 sm:px-8 sm:py-4
//bg-gray-100 font-bold shadow transition duration-300 bg-gray-100 hocus:text-gray-200 focus:outline-none focus:shadow-outline
// text-gray-100

export default () => {
  const navLinks = [
    // <NavLinks key={1}>
    //   <NavLink href="#gll">Về Giáo Làng</NavLink>
    //   <NavLink href="#">Khóa Học</NavLink>
    //   <NavLink href="#">Giá Trị</NavLink>
    //   <NavLink href="#">Liên Hệ</NavLink>
    // </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">
    //     Hire Us
    //   </PrimaryLink>
    // </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            HỌC ANH NGỮ TẠI GIÁO LÀNG
            <br />
          </Heading>
          {/* <br /> */}
          {/* <br /> */}
          <HeadingDescription>
            Comprehensive Solution, driven by trust
          </HeadingDescription>
          {/* <PrimaryAction>Search Events Near Me</PrimaryAction> */}
        </Content>
      </HeroContainer>
    </Container>
  );
};
