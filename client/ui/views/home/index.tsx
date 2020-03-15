import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import _ from "lodash";

import graphqlClient from "../../../src/api/graphql";
import Search from "../../../src/antd/search";

const query = gql`
    query($searchTitle: String!) {
        mangas(searchTitle: $searchTitle) {
            id
            title
        }
    }
`;

const MIN_QUERY_LENGTH = 3;
const THROTTLE_TIME = 500;

export const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { data, loading } = useQuery(query, {
        skip: searchQuery.length < MIN_QUERY_LENGTH,
        variables: { searchTitle: searchQuery }
    });

    const handleChange = useCallback(
        _.throttle((searchQuery :string)=> {
            setSearchQuery(searchQuery)
        }, THROTTLE_TIME), 
        [setSearchQuery]
    )

    return (
        <div className="main-search-container">
            <Search
                onChange={handleChange}
            />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
