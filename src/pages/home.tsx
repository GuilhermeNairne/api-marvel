import { Box, Button, Flex, Img, Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Historias } from "./historias";
import { Personagens } from "./personagens";
import avengers from "../assets/avengers.png";
import iromManColor from "../assets/irom-man-color.png";
import iromManBlack from "../assets/irom-man-black.png";
import captainColor from "../assets/captain-color.png";
import captainBlack from "../assets/captain-black.png";
import { useComics } from "../hooks/useComics";
import { useQuery } from "react-query";
export function Home() {
  const [page, setPage] = useState("historias");
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const { getComicsByTitle } = useComics();
  const { data: comics } = useQuery({
    queryKey: ["comics"],
    queryFn: async () =>
      getComicsByTitle(body),
  });

  const body = {
    titles: [
    'Civil War (2006) #6',
    'Civil War (2006) #5 (TURNER VARIANT)',
    'Civil War (2006) #3',
    'Civil War (2006) #1'
    ]
  }

  

  return (
    <Flex flexDir={"column"} flex={1}>
      <Flex
        w={"full"}
        h={"130px"}
        bg={"black"}
        justifyContent={"center"}
        flexDir={"column"}
      >
        <Box w={"full"} justifyContent={"center"} display={"flex"}>
          <Img
            src={
              "https://seeklogo.com/images/M/Marvel_Comics-logo-821795DF15-seeklogo.com.png"
            }
            h={"80px"}
          />
        </Box>
        <Box w={"full"} h={"1px"} bg={"white"} />
        <Flex mt={"10px"} justifyContent={"center"} gap={15}>
          <Link onClick={() => setPage("personagens")}>
            <Text color={"white"}>Personagens</Text>
          </Link>
          <Link onClick={() => setPage("historias")}>
            <Text color={"white"}>Histórias</Text>
          </Link>
          {/* <Link>
                    <Text color={'white'}>Personagens</Text>
                    </Link> */}
        </Flex>
      </Flex>
      <Box
        display={"flex"}
        w={"full"}
        h={"350px"}
        bgImg={avengers}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Text
            color="white"
            fontSize="64px"
            fontWeight={"bold"}
            fontFamily={"Bangers"}
          >
            AVENGERS
          </Text>
          <Text
            color="white"
            fontSize="48px"
            fontWeight={"bold"}
            fontFamily={"Bangers"}
          >
            CIVIL WAR
          </Text>
        </Stack>
      </Box>
      <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
        <Text fontFamily={"Bangers"} fontSize={"xxx-large"}>
          Contexto
        </Text>
        <Text mx={"150px"} fontSize={"md"}>
          A história gira em torno da ideia de que super-humanos devem se
          registrar junto ao governo e revelar suas identidades secretas,
          tornando-se agentes legalizados do Estado. Os heróis se dividem em
          dois grupos: um liderado pelo Capitão América, que se opõe à
          regulamentação, e outro liderado pelo Homem de Ferro, que apoia a
          supervisão governamental dos super-heróis. Isso leva a confrontos
          intensos entre os personagens, incluindo batalhas épicas entre os
          próprios Vingadores.
        </Text>
        <Button
          bg={"#B10000"}
          w={"130px"}
          h={"40px"}
          mt={"20px"}
          borderWidth={"1px"}
          borderColor={"black"}
          borderRadius={"20px"}
        >
          <Text fontFamily={"Bangers"} fontSize={"x-large"} color={"white"}>
            Ver mais
          </Text>
        </Button>
      </Flex>

      <Text
        fontFamily={"Bangers"}
        fontSize={"xxx-large"}
        mt={"80px"}
        textAlign={"center"}
      >
        ESCOLHA SEU LADO
      </Text>
      <Flex alignItems={"center"} justifyContent={"center"} flexDir={"row"}>
        <Img
          w={"50%"}
          h={"300px"}
          src={isHovered === "irom" ? iromManColor : iromManBlack}
          onMouseEnter={() => setIsHovered("irom")}
          onMouseLeave={() => setIsHovered(null)}
          position="relative"
        />

        <Img
          w={"50%"}
          h={"300px"}
          src={isHovered === "captain" ? captainColor : captainBlack}
          onMouseEnter={() => setIsHovered("captain")}
          onMouseLeave={() => setIsHovered(null)}
          position="relative"
        />
      </Flex>

      <Flex
        w={"full"}
        h={"400px"}
        bg={"#FAA72C"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Text
          fontFamily={"Bangers"}
          fontSize={"xxx-large"}
          mt={"20px"}
          textAlign={"center"}
        >
          HISTÓRIAS
        </Text>
        {comics?.map((comic) => (

        
        isHovered === "comic" ? (
          <Box
            borderWidth={"2px"}
            borderRadius={5}
            borderColor={"black"}
            onMouseEnter={() => setIsHovered("comic")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <Img w={"150px"} h={"220px"} src={comic?.thumbnail} />
            <Box
              borderTopWidth={"2px"}
              borderColor="black"
              w={"150px"}
              h={"55px"}
              bg={"#B10000"}
              p={1}
            >
              <Text color={"white"} textAlign={"center"} fontFamily={"Bangers"} fontWeight={'bold'}>
                {comic?.title}
              </Text>
            </Box>
          </Box>
        ) : (
          <Box
            borderWidth={"2px"}
            borderRadius={5}
            borderColor={"black"}
            onMouseEnter={() => setIsHovered("comic")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <Img w={"150px"} h={"220px"} src={comic?.thumbnail} />
          </Box>
        )
        ))}
      </Flex>
    </Flex>
  );
}
