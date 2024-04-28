import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useCharacters } from "../hooks/useCharacters";
import { useComics } from "../hooks/useComics";

export function Home2() {
    const {getCharacters} = useCharacters()
    const {getComics} = useComics()
    
    const {data: Characters} = useQuery({
        queryKey: ['personagens'],
        queryFn: async () => getCharacters()
    })

    const {data: Comics} = useQuery({
        queryKey: ['comics'],
        queryFn: async () => getComics()
    })

    return (
        <Flex flexDir={"column"} flex={1}>
            <Flex
             
                w={"full"}
                h={"100px"}
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
            </Flex>
            <Text fontSize={'x-large'} fontWeight={'bold'} mt={'20px'}>Personagens</Text>
            <Flex flexDir={'column'} style={{gap: 10}}>
  <Flex flexDir={'row'} flexWrap={'wrap'} style={{gap: 10}}>
    {Characters?.map((character) => (
      <Box
        key={character._id} // Adicionei uma chave única para cada personagem
        borderWidth={"2px"}
        borderRadius={5}
        borderColor={"black"}                    
        style={{flex: '0 0 calc(12% - 10px)'}} // Defina a largura desejada para cada item (33.33% para 3 itens por linha)
      >
        <Img w={"150px"} h={"220px"} src={character?.urlImage} />
        <Box
          borderTopWidth={"2px"}
          borderColor="black"
          w={"150px"}
          h={"55px"}
          bg={"#B10000"}
          p={1}
        >
          <Text color={"white"} textAlign={"center"} fontFamily={"Bangers"} fontWeight={'bold'}>
            {character?.name}
          </Text>
        </Box>
      </Box>
    ))}
  </Flex>
</Flex>

<Text fontSize={'x-large'} fontWeight={'bold'} mt={'20px'}>Histórias</Text>
            <Flex flexDir={'column'} style={{gap: 10}}>
  <Flex flexDir={'row'} flexWrap={'wrap'} style={{gap: 10}}>
    {Comics?.map((comic) => (
      <Box
        key={comic._id} // Adicionei uma chave única para cada personagem
        borderWidth={"2px"}
        borderRadius={5}
        borderColor={"black"}                    
        style={{flex: '0 0 calc(12% - 10px)'}} // Defina a largura desejada para cada item (33.33% para 3 itens por linha)
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
    ))}
  </Flex>
</Flex>

        </Flex>
    )
}
