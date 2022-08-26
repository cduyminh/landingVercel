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
        "IELTS là một bài thi chuẩn hóa được Hội Đồng Anh đưa ra, nhằm xác định năng lực tiếng anh để phù hợp với môi trường quốc tế. Chương trình IELTS của Giáo Làng mang tính khác biệt trong phương pháp dạy và học.",
      url: "/ielts",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
      title: "NGỮ PHÁP",
      authorName:
        "Ngữ pháp là một kỹ năng không thể thiếu trong quá trình nâng cao năng lực tiếng anh. Giáo Làng đào tạo ngữ pháp các lớp từ tiểu học đến THPT, thi chuyển cấp.",
      url: "/communication",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "GIAO TIẾP",
      authorName:
        "Là một kỹ năng đặc biệt quan trọng trong cuộc sống, Giáo Làng đã có kinh nghiệm trong việc giúp nhiều bạn học sinh giao tiếp tốt trong môi trường quốc tế.",
      url: "/grammar",
    },
    {
      postImageSrc:
        "https://expatlifeinthailand.com//assets/media/2020/03/classroom.jpg",
      title: "TRẺ EM",
      authorName:
        "Đây là một chương trình học tiếng Anh năng động được thiết kế đặc biệt cho học sinh từ 3 đến 12 tuổi",
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
