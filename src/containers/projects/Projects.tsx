import { Box, List, Modal, Text } from "../../components";
import { OFFERS, PROJECTS } from "../../data";

import { IProject } from "../../data/projects";
import { ModalHandle } from "../../components/modal/Modal";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const [project, setProject] = React.useState<IProject | null>(null);
  const modalRef = React.useRef<ModalHandle>(null);

  const openModal = React.useCallback(() => {
    if (modalRef.current) {
      modalRef.current.toggle();
    }
  }, [modalRef.current]);

  const onProjectSelected = React.useCallback(
    (item: IProject) => {
      setProject(item);
      openModal();
    },
    [project]
  );

  return (
    <>
      <Modal ref={modalRef}>
        <ProjectDetails item={project} close={openModal} />
      </Modal>
      <Box direction="column" padding="3em 0" gap="3em" flex={1}>
        <Box direction="column" align="center" gap="0.75em">
          <Text
            fontWeight="bold"
            fontSize={"xlg"}
            fontType="header"
            color="var(--text-primary-color)"
            textAlign="center"
          >
            Projects
          </Text>
          <Text
            fontWeight="bold"
            fontSize={"md"}
            fontType="header"
            color="var(--text-secondary-color)"
            textAlign="center"
          >
            I have worked with a range of clients, from small startups to large
            corporations, and I can't wait to put your project on my list of
            successes.
          </Text>
        </Box>

        {/* Project Card */}

        <List
          renderItem={(item) => (
            <ProjectCard item={item} onClick={() => onProjectSelected(item)} />
          )}
          data={PROJECTS}
          gap="1.5em"
        />
      </Box>
    </>
  );
};

export default Projects;
