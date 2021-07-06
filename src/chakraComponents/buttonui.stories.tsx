import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { AiOutlineFolder } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

export const Variants = () => (
  <VStack>
    <Button variant="solid">Solid</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </VStack>
)

export const Size = () => (
  <VStack>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </VStack>
)

export const Disable = () => (
  <VStack>
    <Button>Rest</Button>
    <Button disabled>Rest</Button>
  </VStack>
)

export const WithIcon = () => (
  <VStack>
    <Button leftIcon={<AiOutlineFolder/>}>Prepend</Button>
    <Button rightIcon={<BiChevronDown/>}>Append</Button>
    <Button leftIcon={<AiOutlineFolder/>} rightIcon={<BiChevronDown/>}>Both</Button>
  </VStack>
)

const ButtonUIStory = {
  title: "Pinter/Atom/Button",
  component: Button
}

export default ButtonUIStory