import api from "../api";

export function useCharacters() {
    async function getCharacters() {
        const {data} = await api.get("characters");

        return data
    }

    return {getCharacters}
}