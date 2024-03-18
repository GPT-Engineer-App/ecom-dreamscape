import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Badge, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a sample product",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTA3OTEzOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another sample product",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTA3OTEzOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more products here
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: "Added to cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading>My E-commerce Store</Heading>
        <Button leftIcon={<FaShoppingCart />}>Cart ({cart.length})</Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {product.name}
            </Heading>
            <Text mb={2}>{product.description}</Text>
            <Flex align="center" justify="space-between">
              <Text fontWeight="bold">${product.price}</Text>
              <Button colorScheme="blue" size="sm" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Flex>
          </Box>
        ))}
      </Grid>

      {cart.length > 0 && (
        <Box mt={8}>
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
      )}
    </Box>
  );
};

export default Index;
