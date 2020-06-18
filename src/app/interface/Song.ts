import {Style} from './Style';

export interface Song {
  id?: number;
  name: string;
  image: string;
  lyrics?: string;
  fileMp3?: any;
  dateSubmitted?: Date;
  singer: string;
  author: string;
  views?: number;
  style?: Style;
}
