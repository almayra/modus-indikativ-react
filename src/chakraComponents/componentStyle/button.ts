export const ButtonStyles = {
  baseStyle: {
    fontWeight: "normal",
    borderRadius: "base",
  },
  sizes: {
    sm: {
      fontSize: 13,
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 13,
      px: 4,
      py: 3,
    },
  },
  variants: {
    solid: {
      borderRadius: "20px",
      bg: "primary.700",
      color: "gray.700",
      _hover: {
        bg: "primary.600",
      },
      _active: {
        bg: "primary.900",
      },
      _focus: {
        bg: "primary.900",
      },
    },
    outline: {
      borderRadius: "20px",
      border: "1px solid",
      borderColor: "primary.700",
      color: "gray.700",
      _hover: {
        bg: "primary.100",
      },
      _active: {
        bg: "primary.300",
      },
      _focus: {
        bg: "primary.300",
      },
    },
    ghost: {
      borderRadius: "20px",
      bg: "transparent",
      color: "link.100",
      _hover: {
        bg: "gray.10",
      },
      _active: {
        bg: "gray.25",
      },
      _focus: {
        bg: "gray.25",
      },
    },
    secondary: {
      borderRadius: "20px",
      bg: "secondary.400",
      color: "gray.10",
      _hover: {
        bg: "secondary.500",
      },
      _active: {
        bg: "secondary.300",
      },
      _focus: {
        bg: "secondary.300",
      },
    },
    secondary_outline: {
      borderRadius: "20px",
      border: "1px solid",
      borderColor: "secondary.700",
      color: "gray.700",
      _hover: {
        bg: "secondary.100",
      },
      _active: {
        bg: "secondary.50",
      },
      _focus: {
        bg: "secondary.50",
      },
    },
    danger: {
      borderRadius: "20px",
      bg: "danger.300",
      color: "gray.10",
      _hover: {
        bg: "danger.200",
      },
      _active: {
        bg: "danger.400",
      },
      _focus: {
        bg: "danger.400",
      },
    },
    danger_outline: {
      borderRadius: "20px",
      border: "1px solid",
      borderColor: "danger.300",
      color: "gray.700",
      _hover: {
        bg: "danger.100",
      },
      _active: {
        bg: "danger.400",
      },
      _focus: {
        bg: "danger.400",
      },
    },
  },
};

export default ButtonStyles;
