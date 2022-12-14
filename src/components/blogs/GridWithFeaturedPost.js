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
)`text-gray-900 sm:text-lg md:text-2xl lg:text-3xl`;
//sm:text-2xl md:text-2xl lg:text-3xl
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
const AuthorName = tw.div`mt-2 text-base`;
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

export default ({
  subheading = "",
  heading = "We love writing.",
  description = "",
  posts = [
    // {
    //   postImageSrc:
    //     "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    //   authorImageSrc:
    //     "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.95&w=512&h=512&q=80",
    //   title: "Enjoying the beach life while on a vacation",
    //   description:
    //     "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
    //   authorName: "Adam Cuppy",
    //   authorProfile: "Vlogger",
    //   url: "https://reddit.com",
    //   featured: true,
    // },
    // {
    //   postImageSrc:
    //     "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
    //   title: "Getting the most out of your vacation",
    //   authorName: "Aaron Patterson",
    //   url: "https://reddit.com",
    // },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "IELTS",
      authorName:
        "IELTS l?? m???t b??i thi chu???n h??a ???????c H???i ?????ng Anh ????a ra, nh???m x??c ?????nh n??ng l???c ti???ng anh ????? ph?? h???p v???i m??i tr?????ng qu???c t???. Ch????ng tr??nh IELTS c???a Gi??o L??ng mang t??nh kh??c bi???t trong ph????ng ph??p d???y v?? h???c.",
      url: "/ielts",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
      title: "NG??? PH??P",
      authorName:
        "Ng??? ph??p l?? m???t k??? n??ng kh??ng th??? thi???u trong qu?? tr??nh n??ng cao n??ng l???c ti???ng anh. Gi??o L??ng ????o t???o ng??? ph??p c??c l???p t??? ti???u h???c ?????n THPT, thi chuy???n c???p.",
      url: "/communication",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "GIAO TI???P",
      authorName:
        "L?? m???t k??? n??ng ?????c bi???t quan tr???ng trong cu???c s???ng, Gi??o L??ng ???? c?? kinh nghi???m trong vi???c gi??p nhi???u b???n h???c sinh giao ti???p t???t trong m??i tr?????ng qu???c t???.",
      url: "/grammar",
    },
    {
      postImageSrc:
        "https://expatlifeinthailand.com//assets/media/2020/03/classroom.jpg",
      title: "TR??? EM",
      authorName:
        "????y l?? m???t ch????ng tr??nh h???c ti???ng Anh n??ng ?????ng ???????c thi???t k??? ?????c bi???t cho h???c sinh t??? 3 ?????n 12 tu???i",
      url: "/kids",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Posts>
          {posts.map((post, index) => (
            <PostContainer featured={post.featured} key={index}>
              <Post className="group" href={post.url}>
                <PostImage imageSrc={post.postImageSrc} />
                <PostText>
                  <PostTitle>{post.title}</PostTitle>
                  {post.featured && (
                    <PostDescription>{post.description}</PostDescription>
                  )}
                  <AuthorInfo>
                    {post.featured && <AuthorImage src={post.authorImageSrc} />}
                    <AuthorTextInfo>
                      <AuthorName>{post.authorName}</AuthorName>
                      {post.featured && (
                        <AuthorProfile>{post.authorProfile}</AuthorProfile>
                      )}
                    </AuthorTextInfo>
                  </AuthorInfo>
                </PostText>
              </Post>
            </PostContainer>
          ))}
        </Posts>
      </ContentWithPaddingXl>
    </Container>
  );
};
