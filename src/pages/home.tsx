import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Historias } from "./historias";
import { Personagens } from "./personagens";
export function Home() {
    const [page, setPage] = useState('historias')

    return (
        <Flex flexDir={'column'}>
            <Flex w={'full'} h={'130px'} bg={'black'} justifyContent={'center'} flexDir={'column'}>
                <Box w={'full'} justifyContent={'center'} display={'flex'}>
                    <Img src={'https://seeklogo.com/images/M/Marvel_Comics-logo-821795DF15-seeklogo.com.png'} h={'80px'}/>
                </Box>
                <Box w={'full'} h={'1px'} bg={'white'}/>
                <Flex mt={'10px'} justifyContent={'center'} gap={15}>
                    <Link onClick={() => setPage("personagens")}>
                    <Text color={'white'}>Personagens</Text>
                    </Link>
                    <Link onClick={() => setPage("historias")}>
                    <Text color={'white'}>Histórias</Text>
                    </Link>
                    {/* <Link>
                    <Text color={'white'}>Personagens</Text>
                    </Link> */}
                </Flex>
            </Flex>

            {page === 'historias' ? <Historias /> : <Personagens />}
        </Flex>
    )
}