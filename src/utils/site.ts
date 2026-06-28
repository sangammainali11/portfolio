const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "Sangam Mainali | Full Stack Developer",
  description:
    "Personal portfolio website showcasing Sangam Mainali's projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/profile.png`,
  links: {
    twitter: "https://github.com/sangammainali11",
    github: "https://github.com/sangammainali11",
  },
  mailSupport: "sangammainali1@gmail.com",
};
