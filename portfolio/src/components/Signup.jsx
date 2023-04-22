import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { signUpSchema } from "../schemas/index";
import './styles/signup.css';
import axios from 'axios'

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  password: "", 
};

const Signup = () => {
  const signupApi = async (values) => {
    console.log((values))
    const url = "http://localhost:8000/api/auth/signup"
    await axios.post(url, (values))
      .then(function (response) {
        console.log(response);
        alert("sign up sucessful, click on login is bottom and proceed")

      })
      .catch(function (error) {
        console.log("axios request")
        console.log(error);
      });
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

    initialValues: initialValues,
    validationSchema: signUpSchema,


    onSubmit: async (values) => {
      console.log("🚀 ~ file: Signup.jsx ~ line 36 Signup ~ values", values);
      await signupApi(values)
    },

  });
  console.log(errors);

  const [showPassword, setShowPassword] = useState(false);


  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={6} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to explore amazing puzles ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>

                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="name"
                    name="name"
                    value=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onchange={(e) => this.setState({ fname: e.targeet.value })}
                  />
                  {errors.name && touched.name ? (<p className="error-name">{errors.name}</p>) : null}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    autoComplete="off"

                    type="text"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onchange={(e) => this.setState({ lname: e.targeet.value })}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onchange={(e) => this.setState({ email: e.targeet.value })}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (<p className="error-email">{errors.email}</p>) : null}
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onchange={(e) => this.setState({ password: e.targeet.value })}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (<p className="error-password">{errors.password}</p>) : null}
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={3}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link style={{ color: "#4299e1" }} to="/Login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;