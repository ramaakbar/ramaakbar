import Github from "@/components/icon/github";
import Linkedin from "@/components/icon/linkedin";
import Layout from "@/components/layout";
import Project from "@/components/project";
import Heading from "@/components/typography/heading";
import LinkText from "@/components/typography/linktext";
import Text from "@/components/typography/text";
import { reposSchema } from "@/schemas";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = (async (context) => {
  const data = await axios.get(
    "https://rmitiio-api.ramaakbar.xyz/api/repos/pinned/ramaakbar"
  );

  const repos = reposSchema.parse(data.data);

  return {
    props: {
      repos,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps;

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ repos }: Props) {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl">
        <Heading type="h1">Akbar Ramadhan Yusri</Heading>
        <Text>
          Hello! I{"'"}m Rama, a software engineer, final year computer science
          student. My proficiency in both frontend and backend technologies
          using ReactJS and NodeJS.
        </Text>
        <Text>
          Aside from my passion for software development, I have a variety of
          personal interests. In my free time, I enjoy playing video games,
          coding personal projects, watching series / animes and read mangas.
        </Text>
        <Text>
          Check out all of my projects on{" "}
          <LinkText href={"https://github.com/ramaakbar"}>
            <Github /> Github
          </LinkText>
          , contact me on{" "}
          <LinkText
            href={"https://www.linkedin.com/in/akbar-ramadhan-yusri-48a422170"}
            className="group"
          >
            <Linkedin /> Linkedin
          </LinkText>{" "}
          , or email me at{" "}
          <LinkText href={"mailto:akbar.6b@gmail.com"}>
            akbar.6b@gmail.com
          </LinkText>
          .
        </Text>
      </section>
      <section className="mx-auto mb-5 max-w-3xl space-y-2">
        <Heading type="h3" className="mb-4">
          Tech Stack
        </Heading>
        <Text>
          <span className="font-medium">Frontend:</span> ReactJS, NextJS, React
          Native, Tailwind
        </Text>
        <Text>
          <span className="font-medium">Backend:</span> NodeJS, ExpressJS,
          NestJS, MySQL
        </Text>
        <Text>
          <span className="font-medium">Other:</span> Docker
        </Text>
      </section>
      <section className="mx-auto mb-5 max-w-3xl">
        <Heading type="h3" className="mb-3">
          Projects
        </Heading>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {repos.map((repo, index) => (
            <Project repo={repo} key={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
