import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Tag, Tooltip, AutoComplete } from 'antd';
import gql from 'graphql-tag';
import _ from "lodash";
import { Link } from 'react-router-dom';

// import graphqlClient from "../../../src/api/graphql";
import Search from '../antd/search';
import MangaDetails from './manga-details';

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

const sanitiseTitle = (title :any) => 
    title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-{2,}/g, "-");

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
                </span>
            </AutoComplete.Option>
                    ))

    // const renderTitle = (manga :any) => {
    //     return (
    //         <>
    //     <AutoComplete.Option
    //         className="home-search-option"
    //         key={manga.id}
    //         onClick={()=>alert(manga.title)}
    //         value={manga.title}
    //         style={{ width: 200 }}
    //     >

    //        {/* <Link
    //          className="home-search-option"
    //          to={`${manga.id}-${sanitiseTitle(manga.title)}`}
    //        > */}
    //     <span
    //         className="home-search-option"
    //         onClick={() => {setSelectedManga(manga)}}
    //       >
    //         <Tooltip  
    //             mouseEnterDelay={0.5}
    //             placement="topLeft"
    //             title={manga.title}
    //         >
    //             <div className="home-search-option-title">
    //                 {manga.title}
    //             </div>
    //         </Tooltip>
            
    //         <Tag 
    //             className="home-search-option-status"
    //             color={STATUS_TO_COLOR[manga.status]}
    //         >
    //             {manga.status}
    //         </Tag>
    //         </span>
    //        {/* </Link> */}
    //     </AutoComplete.Option>
    //     </>
    //     );
    //   };
      
    //   const renderItem = (title: string, count: number) => {
    //     return {
    //       value: title,
    //       label: (
    //         <div
    //           style={{
    //             display: 'flex',
    //             justifyContent: 'space-between',
    //           }}
    //         >
    //           {title}
    //         </div>
    //       ),
    //     };
    //   };

    // const dataSource = [
    //     {
    //       label: renderTitle('Libraries'),
    //       options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    //     },
    //     {
    //       label: renderTitle('Solutions'),
    //       options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    //     },
    //     {
    //       label: renderTitle('Articles'),
    //       options: [renderItem('AntDesign design language', 100000)],
    //     },
    // ];

    // const dataSource = 
    //     !loading &&
    //     data &&
    //     data.mangas && 
    //     data.mangas.map(
    //         (manga :any) => (

    //                     {
    //                         label: renderTitle(manga)
    //                     }
    //                     // <Option 
    //                     //     key={manga.id}
    //                     //     value={manga.title}
    //                     // >
    //                     //     {manga.title}
    //                     //     <span className="certain-search-item-count">
    //                     //         {manga.status}
    //                     //     </span>
    //                     // </Option>
    //                 ))

    return (
        <div className="main-search-container">
            <Search
                dataSource={dataSource}
                onChange={handleChange}
            />
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {selectedManga && (
                // <MangaDetails manga={selectedManga} />
                // <pre>{JSON.stringify(selectedManga, null, 2)}</pre>
                <div>
                    <img src={selectedManga.image} />
                </div>
            )}
        </div>
    )
}

export default Home;
