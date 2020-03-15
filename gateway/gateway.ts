import * as gaxios from 'gaxios';

const transformMangas = (mangas :any)=>
    mangas
        // .filter(manga => manga.id)
        .map(
            ({
                a: alias, 
                c: categories,
                h: hits,
                i: _id,
                im: image,
                ld: lastUpdated,
                s: status,
                t: title
            } :any) => ({
                _id,
                alias,
                categories,
                hits,
                image,
                lastUpdated,
                status,
                title
            })
        );

export class Gateway {
  readonly url: string;

  constructor(url: string) {
    this.url = url;

    gaxios.instance.defaults = {
      baseURL: this.url,
    };
  }

  private get = async <T>(url: string, params?: unknown) => {
    const res = await gaxios.request<T>({
      method: 'GET',
      url,
      params,
    });

    return res.data;
  };

  fetchMangas = async () => {
    const data = await this.get('https://www.mangaeden.com/api/list/0')
                    .then((res :any) => {
                        res.data.manga = transformMangas(res.data.manga);
                        return res;
                    });
    return data;
  };
}
