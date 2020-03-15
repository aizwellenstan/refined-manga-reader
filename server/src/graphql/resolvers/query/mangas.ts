import Manga from "../../../db/models/Manga";

//@ts-ignore TS6133
const mangaResolver = (context: any, args: any) => {
    if (args.searchTitle) {
        return Manga.find({
            title: new RegExp(args.searchTitle, "i")
        }).sort({ hits: -1 });
    } else {
         // console.log(Object.keys(Manga.find({})));
    return Manga.find({}).sort({ lastUpdated: -1 });
    }
}

export default mangaResolver;
