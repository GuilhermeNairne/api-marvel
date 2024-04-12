import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function Personagens() {
    return (
        <Flex flex={1} p={'20px'} flexDir={'column'}>
            <Text fontSize={'xx-large'} fontWeight={'bold'}>Personagens</Text>
            <Box w={'full'} h={'1px'} bg={'black'} mb={'40px'} />
            <Flex gap={'25px'}>
            {personagens.map((personagem) => (
                <Personagem name={personagem.name} image={personagem.image}/>

            ))}
            </Flex>
        </Flex>
    )
}

type CharacterProps = {
    name: string,
    image: string
}

function Personagem({image, name}: CharacterProps) {
    return(
        <Box w='170px' h={'300px'} bg={'black'}  borderRadius={'10px'} _hover={{transform: "scale(1.1)", transition: "transform 0.2s ease-in-out" }}>
            <Img src={image}/>
            <Box w={'full'} h={'5px'} bg={'red'}/>
            <Text p={'10px'} color={'white'} fontSize={'large'}>{name}</Text>
        </Box>
    )
}

const personagens = [
    {
        name: "Doctor Stange",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe.jpg"
    },
    {
        name: "Wolverine",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg"
    },
    {
        name: "Luke Cage",
        image: "https://i.annihil.us/u/prod/marvel/i/mg/6/a0/5112d8b6e596c.jpg"
    },
    {
        name: "Jessica Jones",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/d/00/5390e41260345.jpg"
    },
    {
        name: "Iron Fist",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/52616788ebc63.jpg"
    },
]