import { PopularTagsStateInterface } from './../modules/popularTags/types/popularTagsState.interface';
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';
import { AuthStateInterface } from "src/app/auth/types/authState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface
}
