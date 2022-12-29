import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import {
  SiCsswizardry,
  SiDjango,
  SiExpress,
  SiGithub,
  SiGmail,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReact,
  SiStyledcomponents,
  SiTsnode,
  SiTypescript,
  SiWhatsapp,
} from "react-icons/si";

import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

export type IconType =
  | "django"
  | "express"
  | "node"
  | "react"
  | "ts"
  | "js"
  | "python"
  | "css"
  | "html"
  | "mongo"
  | "postgres"
  | "graph"
  | "styled"
  | "linkedin"
  | "github"
  | "whatsapp"
  | "gmail"
  | "menu"
  | "close"
  | "show";

const icons = {
  django: SiDjango,
  express: SiExpress,
  node: SiTsnode,
  react: SiReact,
  ts: SiTypescript,
  js: SiJavascript,
  python: SiPython,
  css: SiCsswizardry,
  html: SiHtml5,
  mongo: SiMongodb,
  postgres: SiPostgresql,
  graph: SiGraphql,
  styled: SiStyledcomponents,
  linkedin: SiLinkedin,
  github: SiGithub,
  whatsapp: SiWhatsapp,
  gmail: SiGmail,
  menu: CgMenuRightAlt,
  close: CgClose,
  show: TbArrowUpRight,
};

type Props = {
  color?: string;
  size?: string;
  name: IconType;
};

const Icon = ({ name, ...props }: Props) => {
  const I = icons[name];
  return <I {...props} />;
};

export default Icon;
