import { fetchMangaInfo } from "../../mangaSources/mangaEden";

const Manga = {
    id: (mangaObj :any) => mangaObj._id,
    info: async (mangaObj :any) => {
        const res = await fetchMangaInfo({
            mangaId: mangaObj.id
        });
    
        return {
            chapters: res.data.chapters,
            id: mangaObj.id
        };
    },
    lastUpdated: (mangaObj :any) =>
        new Date(mangaObj.lastUpdated * 1000)
};

export default Manga;
