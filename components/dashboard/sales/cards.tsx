import { IconButton, IconButtonProps } from "@chakra-ui/button";
import { Flex, FlexProps, Text } from "@chakra-ui/layout";
import React from "react";
import { CgOptions } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useCarousel } from "utils/Hooks/useCarousel";
import Card from "./card";
import Amex from "./card/icons/amex";
import Mastercard from "./card/icons/mastercard";
import Visa from "./card/icons/visa";

const Cards = () => {
  const cards = [
    {
      number: "5366213829991202",
      name: "Jozef Mikuláš",
      expiry: {
        month: "03",
        year: "21",
      },
      type: <Mastercard />,
    },
    {
      number: "5366213829991202",
      name: "Segun Adebayo",
      expiry: {
        month: "03",
        year: "21",
      },
      type: <Visa />,
    },
    {
      number: "5243578524647893",
      name: "Lazar Nikolov",
      expiry: {
        month: "07",
        year: "21",
      },
      type: <Mastercard />,
    },
    {
      number: "2146446289633584",
      name: "ljosberinn | Gerrit Alex",
      expiry: {
        month: "01",
        year: "22",
      },
      type: <Amex />,
    },
  ];

  const {
    prevSlide,
    nextSlide,
    isFirstSlide,
    isLastSlide,
    carouselStyle,
  } = useCarousel({
    slides: cards,
  });
  const arrowStyles: IconButtonProps | any = {
    pos: "absolute",
    zIndex: 10,
    size: "xs",
    fontSize: "lg",
    isRound: true,
    _focus: {
      shadow: "none",
    },
  };
  return (
    <>
      <CardsHeader />
      <Flex pos="relative" alignItems="center" overflow="hidden" w="full">
        <Flex w="full" {...carouselStyle}>
          {cards.map((card, cid) => (
            <Card key={`card-${cid}`} data={card} />
          ))}
        </Flex>
        <IconButton
          aria-label="Previous Card"
          icon={<IoMdArrowDropleft />}
          left={-2}
          onClick={prevSlide}
          {...arrowStyles}
          display={isFirstSlide ? "none" : "flex"}
        />
        <IconButton
          aria-label="Next Card"
          icon={<IoMdArrowDropright />}
          right={-2}
          onClick={nextSlide}
          {...arrowStyles}
          display={isLastSlide ? "none" : "flex"}
        />
      </Flex>
    </>
  );
};

export default Cards;

const CardsHeader = (props: FlexProps) => {
  return (
    <Flex w="full" alignItems="center" {...props}>
      <IconButton
        aria-label="Add Card"
        icon={<FiPlus />}
        isRound
        size="xs"
        variant="outline"
        borderStyle="dotted"
        borderWidth="2px"
        colorScheme="brand"
        fontSize="lg"
        mr="auto"
      />
      <Text textStyle="default" fontWeight="semibold">
        Your Cards
      </Text>
      <IconButton
        aria-label="Card Options"
        icon={<CgOptions />}
        variant="ghost"
        fontSize="lg"
        ml="auto"
      />
    </Flex>
  );
};
