import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import _ from "lodash";

// import graphqlClient from "../../../src/api/graphql";
import Search from "../../../src/antd/search";

const query = gql`
    query($searchTitle: String!) {
        mangas(searchTitle: $searchTitle) {
            id
            title
            status
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

    const renderTitle = (title: string, status: any) => {
        return (
          <span>
            {title}
            <span
              style={{ float: 'right' }}
            >
              {status}
            </span>
          </span>
        );
      };
      
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

    const dataSource = 
        !loading &&
        data &&
        data.mangas && 
        data.mangas.map(
            (manga :any) => (

                        {
                            label: renderTitle(manga.title, manga.status)
                        }
                        // <Option 
                        //     key={manga.id}
                        //     value={manga.title}
                        // >
                        //     {manga.title}
                        //     <span className="certain-search-item-count">
                        //         {manga.status}
                        //     </span>
                        // </Option>
                    ))

    return (
        <div className="main-search-container">
            <Search
                dataSource={dataSource}
                onChange={handleChange}
            />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
