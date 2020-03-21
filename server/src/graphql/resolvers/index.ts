// import { GraphQLScalarType } from 'graphql';

import Manga from "./Manga";
import * as Query from "./query";

const resolvers = {
    // Date: new GraphQLScalarType({
    //     name: "Date",
    //     description: "Date",
    //     serialize(date) {
    //         return date.toISOString()
    //     }
    // }),
    MangaStatus: {
        COMPLETED: 2,
        ONGOING: 1,
        SUSPENDED: 0
    },
    Manga,
    Query
};

export default resolvers;
