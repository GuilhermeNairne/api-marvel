import api from "../api";

type charactersType = {
    _id: string
    name: string,
    description: string,
    urlImage: string
}[]

export function useCharacters() {
    async function getCharacters() {
        const {data} = await api.get<charactersType>("characters");

        return data
    }

    return {getCharacters}
}