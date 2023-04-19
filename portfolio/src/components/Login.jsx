import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, Text, useColorModeValue, } from '@chakra-ui/react';
import { Formik, useFormik } from "formik";
  import { Link } from 'react-router-dom';
  import { loginSchema } from '../schemas/loginschema';
  import axios from 'axios'
 
  
  const initialValues = {
    email: "",
    password: "",
  };
  
  
  const Login = () => {

    const loginApi = async (values) => {
      console.log((values))
      const url = "http://localhost:8000/api/auth/signin"
      await axios.post(url, (values))
        .then(function (response) {
          // if(response.status === 200){
          //   response.redirect('/LandingPage');
          // }
          console.log(response);
          alert ("login successful, please go to link http://localhost:3000/LandingPage ")
          
        })
        .catch(function (error) {
          console.log("axios request")
          console.log(error);
          alert("wrong password");
        });
      }

    const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
  
      initialValues: initialValues,
      validationSchema: loginSchema,   
  
      onSubmit: (values) => {

        loginApi(values);
        console.log("🚀 ~ file: login.jsx ~ line 19 ~ login ~ values", values);
      },
    });
    console.log(errors);




    return (
      <Flex
        minH={'100vh'}
      
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>Games</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.email && touched.email ? (<p className="error-email">{errors.email}</p>):null}


              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur} />

                {errors.password && touched.password ? (<p className="error-pass">{errors.password}</p>):null}

              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  {/* <Checkbox>Remember me</Checkbox> */}
                  {/* <Link color={'blue.400'}>Forgot password?</Link> */}
                </Stack>
                <Button onClick={handleSubmit}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
                <Text align={'center'}>
                  don't have an account?  <Link  style={{color:"#4299e1"}} to='/'>Sign up</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );

  }

  export default Login;