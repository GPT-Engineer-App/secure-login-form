import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, useToast } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Login submitted:", email, password);
    // Show success toast
    toast({
      title: "Login Successful",
      description: "You have successfully logged in.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" rightIcon={<FaSignInAlt />}>
            Login
          </Button>
        </VStack>
      </form>
      <Text mt={4} textAlign="center">
        Don't have an account? <a href="/signup">Sign up</a>
      </Text>
    </Box>
  );
};

export default Index;
