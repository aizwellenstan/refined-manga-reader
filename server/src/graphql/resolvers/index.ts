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
    Manga,
    Query
};

export default resolvers;
