import React from 'react';

export const Manga = ({match} :any)  => {
    return <pre>{JSON.stringify(match.params, null, 2)}</pre>
}
