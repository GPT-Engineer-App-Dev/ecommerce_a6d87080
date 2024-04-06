import { Box, Button, Flex, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAddToCart = () => {
    // In a real application, we would add the product to the cart here
    // For now, we'll just display a toast notification
    toast({
      title: "Added to cart!",
      description: "The product has been added to your cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMjM4Mzg4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Image" borderRadius="md" />

        <Box p={6}>
          <Box d="flex" alignItems="baseline">
            <Heading size="lg" fontWeight="semibold" as="h4" lineHeight="tight">
              Product Title
            </Heading>
          </Box>

          <Box>
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              $29.99
            </Text>
          </Box>

          <Box>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </Box>

          <Stack direction="row" spacing={4} align="center" justifyContent="center" mt={4}>
            <Button leftIcon={<FaCartPlus />} colorScheme="teal" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
