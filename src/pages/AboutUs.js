import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import TheFeatures from "components/features/DashedBorderSixFeatures";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ImageViewer from "components/blogs/SmallImagesViewer.js";
import SimpleFooter from "components/footers/SimpleFiveColumn.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import VerticalFeatures from "components/features/VerticalWithAlternateImageAndText.js";
import Hero from "components/hero/BackgroundAsImage.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";

// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      {/* <Header /> */}
      <MainFeature1
        subheading={<Subheading>Giới thiệu khóa học</Subheading>}
        heading="IELTS TẠI GIÁO LÀNG"
        description="IELTS là một chương trình đào tạo tiếng anh quốc tế có chức năng học tập và luyện thi IELTS. Quan điểm về phương pháp dạy học
        Được hiểu là tổng thể các định hướng về hành động phương pháp, mà ở đó có sự kết hợp của nhiều yếu tố như: nguyên tắc dạy học; cơ sở lý 
        thuyết của lý luận dạy học."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1565966148855-2535f2165915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
      />
      <ImageViewer
        heading={
          <>
            {/* <HighlightedText>Writing</HighlightedText> */}
            LỘ TRÌNH HỌC IELTS TẠI GIÁO LÀNG
          </>
        }
        imageSrc={
          "https://yola.vn/wp-content/uploads/2018/04/WEbsite-J-chart.jpg"
        }
      />
      <SliderCard />
      <MainFeature
        subheading={<Subheading>ĐA DẠNG PHƯƠNG PHÁP</Subheading>}
        heading="VÌ SAO IELTS LẠI CẦN THIẾT?"
        description="IELTS là một chương trình đào tạo tiếng anh quốc tế có chức năng học tập và luyện thi IELTS. Quan điểm về phương pháp dạy học
       Được hiểu là tổng thể các định hướng về hành động phương pháp, mà ở đó có sự kết hợp của nhiều yếu tố như: nguyên tắc dạy học; cơ sở lý 
       thuyết của lý luận dạy học."
        buttonRounded={false}
        primaryButtonText="Đăng kí để nhận tư vấn"
        imageSrc="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
      />
      <VerticalFeatures />

      {/* <TheFeatures /> */}
      {/* <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
        ]}
        linkText=""
      /> */}
      {/* <TeamCardGrid subheading={<Subheading>OUR TEAM</Subheading>} /> */}

      <Testimonial />
      <ContactUsForm />
      <SimpleFooter />
    </AnimationRevealPage>
  );
};
