import globalAxios from "axios";

export const axios = globalAxios.create({
    baseURL: process.env.MANGA_EDEN_URL
});

const transformChapters = (chapters :any) => chapters.map(
    ([ number, lastUpdated, title, id ] :any) => ({
    id,
    lastUpdated,
    number,
    title
}));

const transformMangas = (mangas :any) =>
    mangas
        // .filter(manga => manga.id)
        .map(
            ({
                a: alias, 
                c: categories,
                h: hits,
                i: _id,
                im: image,
                ld: lastUpdated,
                s: status,
                t: title
            } :any) => ({
                _id,
                alias,
                categories,
                hits,
                image,
                lastUpdated,
                status,
                title
            })
        );

export const fetchAllMangas = () => {
    const langKey = 0;
    return axios.get(`list/${langKey}`)
        .then(res => {
            res.data.manga = transformMangas(res.data.manga);
            return res;
        });
};

export const fetchMangaInfo = ({ mangaId } :any) => {
    return axios.get(`manga/${mangaId}/`)
        .then(res => {
            res.data.chapters = transformChapters(
                res.data.chapters
            );
            return res;
        });
};
