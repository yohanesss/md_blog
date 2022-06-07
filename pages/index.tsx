import type { NextPage } from "next";
import BlogCard from "../components/BlogCard/BlogCard";
import {
  Heading,
  Img,
  HomeIntroContainer,
  SectionContainer,
} from "../components/Util.style";
import { getSortedPostsData } from "../lib/posts";
import { IBlogPost } from "../interfaces/Blog";

type HomeProps = {
  latestPosts: IBlogPost[];
};

const Home: NextPage<HomeProps> = ({ latestPosts }) => {
  const renderLatestPosts = latestPosts.map((post) => (
    <BlogCard key={post.id} {...post} />
  ));

  return (
    <div>
      <HomeIntroContainer>
        <div style={{ paddingRight: "10px" }}>
          <Heading style={{ marginTop: 0, paddingBottom: 0 }}>
            Hi! I&apos;m Yohanes
          </Heading>
          <p>
            My name is Yohanes, Nice to meet You! I&apos;m a Software Engineer
            mostly write code in JavaScript (ES6/Typescript) and React.
          </p>
          <p>
            This is my personal blog, contains my own personal thoughts and my
            experience as a Software Engineer.
          </p>
          <p>Please enjoy your stay 🛋️</p>
        </div>
        <Img src="/dev.jpg" alt="Yohanes Setiawan" />
      </HomeIntroContainer>
      <SectionContainer>
        <Heading>Latest Articles</Heading>
        {renderLatestPosts}
      </SectionContainer>
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = await getSortedPostsData();
  const latestPosts = allPosts.slice(0, 5);

  return {
    props: {
      latestPosts,
      // postsTwo: posts2,
    },
  };
}

export default Home;
