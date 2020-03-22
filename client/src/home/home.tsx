import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Tag, Tooltip, AutoComplete } from 'antd';
import gql from 'graphql-tag';
import _ from "lodash";
// import { Link } from 'react-router-dom';

// import graphqlClient from "../../../src/api/graphql";
import Search from '../antd/search';
import MangaDetails from './manga-details';
// import FavoriteButton from './favorite-button';

const query = gql`
    query($searchTitle: String!) {
        mangas(searchTitle: $searchTitle) {
            id
            image
            title
            status
        }
    }
`;

const MIN_QUERY_LENGTH = 3;
const THROTTLE_TIME = 500;

const STATUS_TO_COLOR :any= {
    COMPLETED: "green",
    ONGOING: "blue",
    SUSPEND: ""
}

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedManga, setSelectedManga] = useState(null);
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

    const dataSource = 
        !loading &&
        data &&
        data.mangas && 
        data.mangas.map(
            (manga :any) => (
                <AutoComplete.Option
                    key={manga.id}
                    value={manga.title}
                >
                    <span
                        className="home-search-option"
                        onClick={() => {setSelectedManga(manga)}}
                    >
                        <Tooltip  
                            mouseEnterDelay={0.5}
                            placement="topLeft"
                            title={manga.title}
                        >
                            <div className="home-search-option-title">
                                {manga.title}
                            </div>
                        </Tooltip>
                    
                        <Tag 
                            className="home-search-option-status"
                            color={STATUS_TO_COLOR[manga.status]}
                        >
                            {manga.status}
                        </Tag>
                        {/* <FavoriteButton manga={manga} /> */}
                    </span>
                </AutoComplete.Option>
            ));

    return (
        <div className="main-search-container">
            <Search
                dataSource={dataSource}
                onChange={handleChange}
            />
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {selectedManga && (
                <MangaDetails manga={selectedManga} />
                // <pre>{JSON.stringify(selectedManga, null, 2)}</pre>
                // <div>
                //     <img src={selectedManga.image} />
                // </div>
            )}
        </div>
    )
}

export default Home;
