import api from "../api";

export interface ComicInterface {
    title: string;
    variantDescription: string
    description: string;
    onsaleDate: string 
    thumbnail: string
  }

  type comicsById = {
    titles: string[]
  }

export function useComics() {
    async function getComicByTitle(title: string) {
        const { data } = await api.get<ComicInterface>("comics/title", { params: { title: title } });
    
        return data;
    }

    async function getComicsByTitle(body: comicsById) {
        const queryParams = body.titles.join('&');
        console.log(body.titles)
        const { data } = await api.get<ComicInterface[]>("comics/search", { params: queryParams} );
    
        return data;
    }

    return {getComicsByTitle}
}