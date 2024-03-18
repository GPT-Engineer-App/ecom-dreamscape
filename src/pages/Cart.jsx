import React from "react";
import { Box, Heading, Text, Flex, Badge } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Cart = ({ cart }) => {
  return (
    <Box>
      <Navigation />
      <Box p={4}>
        <Heading as="h2" size="lg" mb={4}>
          Cart
        </Heading>
        {cart.map((item, index) => (
          <Flex key={index} justify="space-between" align="center" mb={2}>
            <Text>
              {item.name} - ${item.price}
            </Text>
            <Badge colorScheme="green">In Cart</Badge>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Cart;
