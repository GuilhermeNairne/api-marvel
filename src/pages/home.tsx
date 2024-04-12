import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
export function Home() {
    return (
        <Flex>
            <Flex w={'full'} h={'130px'} bg={'black'} justifyContent={'center'} flexDir={'column'}>
                <Box w={'full'} justifyContent={'center'} display={'flex'}>
                    <Img src={'https://seeklogo.com/images/M/Marvel_Comics-logo-821795DF15-seeklogo.com.png'} h={'80px'}/>
                </Box>
                <Box w={'full'} h={'1px'} bg={'white'}/>
                <Flex mt={'10px'} justifyContent={'center'} gap={15}>
                    <Link>
                    <Text color={'white'}>Personagens</Text>
                    </Link>
                    <Link>
                    <Text color={'white'}>Histórias</Text>
                    </Link>
                    {/* <Link>
                    <Text color={'white'}>Personagens</Text>
                    </Link> */}
                </Flex>
            </Flex>
        </Flex>
    )
}