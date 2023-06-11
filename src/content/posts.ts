import { Post } from "../utils/types";

export const POSTS: Post[] = [
  {
    title: "My hiking gear",
    description:
      "An evergreen and filterable blog of my solo long-distance hiking gear.",
    link: "/blog/hiking-gear",
    image: "./illustrations/tent.svg",
    labels: ["#hiking"],
  },
  {
    title: "My ruthlessly simple email setup",
    description:
      "If you are into high maintenance productivity systems like bullet journalling, look away!",
    image: "./illustrations/email.svg",
    link: "/blog/email-setup",
    labels: ["#minimalism"],
  },
  {
    title: "Beginner's frontend setup guide for MacOS",
    description:
      "Learn about the basic tools and config files to set up your device for frontend development and how to build your own dotfiles repository.",
    image: "./illustrations/frontend-setup.svg",
    link: "/blog/frontend-setup",
    labels: ["#frontend"],
  },
  {
    title: "Automated accessibility testing",
    description:
      "How I leverage tooling and automated tests in my workflow to help build accessible experiences efficiently.",
    image: "./illustrations/automated.svg",
    link: "/blog/automated-accessibility-testing",
    labels: ["#frontend", "#accessibility"],
  },
  {
    title: "Manual accessibility testing",
    description:
      "Manual checks I do using the keyboard and screen reader to test my website for accessibility.",
    image: "./illustrations/manual.svg",
    link: "/blog/manual-accessibility-testing",
    labels: ["#frontend", "#accessibility"],
  },
];
