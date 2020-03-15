import Manga from "../../../db/models/Manga";

//@ts-ignore TS6133
const mangaResolver = (context :any, args :any) => {
    return Manga.findById({ _id: args.id });
}

export default mangaResolver;
