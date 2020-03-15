// import { Gateway } from '../../../gateway';
import { CronJob } from 'cron';
// import { MANGA_RESOURCE_URL } from '../../config';

import "../db";
import { fetchAllMangas } from "../mangaSources/mangaEden";
import Manga from "../db/models/Manga";

export class MangaCron {
  // private readonly gateway: Gateway;

  constructor() {
    // this.gateway = new Gateway(MANGA_RESOURCE_URL);
    this.cron();
  }

  private cron = () => {
    // const job = new CronJob('* * * * *', this.collectMangas);
    const job =new CronJob('1 * * * * *', this.collectMangas);
    return job.start();
  };

  private collectMangas = async () => {
    const res = await fetchAllMangas();
    const mangas = res.data.manga;

    console.log(mangas)
    await Manga.insertMany(mangas);
    console.log("seeded")
  };

  // private createMangas = async (mangas: any) => {
  //   return Manga.insertMany(mangas)
  // };
}
