import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Spin } from 'antd';

const query = gql`
    query($chapterId: ID!) {
        chapter(id: $chapterId) {
            id
            images {
                url
                height
                width
            }
        }
    }
`;

export const MangaChapter = ({
    match: {
        params: {chapterId}}
    } :any)  => {
        const { data, loading } = useQuery(query, {
            variables: { chapterId }
        });

        if (loading) return <Spin />;

        return (
            <div className="manga-chapter-wrapper">
                {[...data.chapter.images]
                .reverse()
                .map(
                    (image :any, index :any) => (
                        <div key={index}>
                            <img 
                                src={image.url.replace("https://cdn.mangaeden.com/mangasimg", "/mangasimg")} 
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    )
                )}
            </div>
        )
}
