import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = ({ cartCount }) => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex justify="space-between" align="center" maxW="container.lg" mx="auto" px={4}>
        <Link to="/">
          <Button variant="link" colorScheme="blue">
            Home
          </Button>
        </Link>
        <Link to="/cart">
          <Button leftIcon={<FaShoppingCart />}>Cart ({cartCount})</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
