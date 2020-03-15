import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

import Search from "../../../src/antd/search";

const query = gql`
    query($searchTitle: String!) {
        mangas(searchTitle: $searchTitle) {
            id
            title
        }
    }
`;

export const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { data, loading } = useQuery(query, {
        variables: { searchTitle: searchQuery }
    });

    return (
        <div className="main-search-container">
            <Search
                onChange={(searchQuery :string) => {
                    setSearchQuery(searchQuery);
                    console.log(searchQuery)
                    console.log(data)
                }}
            />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
