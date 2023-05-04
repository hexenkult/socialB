import React, { useState } from 'react';
import {
  Flex,
  Box,
  Divider,
  Center,
  Spacer,
  Button,
  ButtonGroup,
  IconButton,
  Image
} from '@chakra-ui/react';
import logo from '../assets/logo.png';
import { FiShoppingBag, FiHome, FiLogOut, FiUser } from "react-icons/fi";
import { FaStore, FaShoppingCart, FaHome } from "react-icons/fa";


const Navbar = () => {
  
  const [activeButton, setActiveButton] = useState<string>('');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  }

  return (
    <>
      <Flex
        alignItems="center"
        bg="black.100"
        p={4}
        flexDirection="column"
        position="fixed"
        top="0"
        left="0"
        bottom="0"
        borderRadius="8px"
      >

        <Image src={logo} alt="logo" m={23} />

        <IconButton aria-label='Home' icon={<FaHome />}
        m={15}
        fontSize='22px'
        bg={activeButton === 'home' ? 'black' : 'transparent'}
        color={activeButton === 'home' ? 'white' : 'black'}
        onClick={() => handleButtonClick('home')} />

        <IconButton aria-label='Menu' icon={<FaStore />}
        m={15}
        fontSize='22px'
        bg={activeButton === 'menu' ? 'black' : 'transparent'}
        color={activeButton === 'menu' ? 'white' : 'black'}
        onClick={() => handleButtonClick('menu')} />
        
        
        
        <IconButton aria-label='cart' icon={<FaShoppingCart />}
        m={15} 
        fontSize='22px'
        bg={activeButton === 'cart' ? 'black' : 'transparent'}
        color={activeButton === 'cart' ? 'white' : 'black'}
        onClick={() => handleButtonClick('cart')} />

        <Spacer />
        <ButtonGroup variant="ghost" mb={7} flexDirection="column">
          <IconButton aria-label='account' icon={<FiUser />}
          m={15}
          fontSize='22px'
          bg={activeButton === 'account' ? 'black' : 'transparent'}
          color={activeButton === 'account' ? 'white' : 'black'}
          onClick={() => handleButtonClick('account')} />

          <IconButton aria-label='logout' icon={<FiLogOut />}
          m={15}
          fontSize='22px'
          bg='red'
          color='white'
          onClick={() => handleButtonClick('logout')} />
        </ButtonGroup>
      </Flex>
      <Divider mt={-5} />
    </>
  );
};

export default Navbar;
