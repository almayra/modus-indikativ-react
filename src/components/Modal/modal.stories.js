import { Modal } from "./Modal";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { ModalHead } from "./ModalHead";
import React from "react";

export const Default = (args) => (
  <Modal size="large" {...args}>
    <ModalHead>Modal Header</ModalHead>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum
      massa odio, et varius libero finibus sit amet. Aenean ac enim aliquet,
      pellentesque ligula a, ultricies augue. Pellentesque eu ipsum quis turpis
      posuere dignissim eget non leo. Praesent eleifend, tortor et molestie
      fermentum, enim dui rhoncus ligula, rhoncus convallis ante felis a eros.
      Pellentesque ut pretium nisi, sed tempor leo. Pellentesque id massa felis.
      Phasellus rhoncus, arcu vel auctor euismod, tortor nisi porttitor urna, ac
      feugiat nisl dui quis neque. Donec pharetra, risus et porttitor faucibus,
      libero erat tempus nibh, ac sodales diam sem vitae mi. Aliquam vitae dui
      vel dolor sollicitudin rutrum.
    </ModalBody>
    <ModalFooter primaryLabel="Primary" secondaryLabel="Secondary" />
  </Modal>
);

const ModalStory = {
  title: "Molecule/Modal",
  component: Modal,
};

export default ModalStory;
