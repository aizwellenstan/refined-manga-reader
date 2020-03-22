import React, { useContext } from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import * as R from 'ramda';

import FavoritedMangaContext from '../contexts/favorited-manga-context';

// const { 
//     favoriteManga,
//     isMangaFavorited,
//     unfavoriteManga
// } = useContext(FavoritedMangaContext);

// const FavoriteButton = ({manga} :any) => {
//     const IconComponent = isMangaFavorited(manga.id)
//         ? StarFilled
//         : StarOutlined;

//     return (
//         <IconComponent 
//             onClick={e => {
//                 e.stopPropagation();
//                 R.ifElse(
//                     isMangaFavorited, 
//                     unfavoriteManga,
//                     favoriteManga
//                 )(manga.id);
//             }}
//         />
//     );
// };

// export default FavoriteButton;
