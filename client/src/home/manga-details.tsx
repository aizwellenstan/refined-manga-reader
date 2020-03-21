import React from 'react';

export const MangaDetails = ({ manga } :any) => {
    return(
        <div>
            <img src={manga.image} />
        </div>
    );
};
