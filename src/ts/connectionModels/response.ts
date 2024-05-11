import sampleHeroData from "./sampleHeroResponse.json";
import sampleConnectData from "./connectSampleResponse.json";

type THeroSection = typeof sampleHeroData;

export interface IHeroSectionDetails {
  heroSectionCollection: {
    items: [THeroSection];
  };
}

export type TConnectCollectionResponse = typeof sampleConnectData;

export type TSocialsUnit =
  TConnectCollectionResponse["connectCollection"]["items"][0]["socialsCollection"]["items"][0];
