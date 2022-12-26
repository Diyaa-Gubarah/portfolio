/**
 * https://css-tricks.com/hash-tag-links-padding/
 */

import styled from "styled-components";

type Props = {
  id: "home" | "services" | "projects" | "testimonial" | "contact";
};

const EmptySpan = styled.span<Props>`
  content: "&nbsp";
  display: inline;
`;

export default EmptySpan;
