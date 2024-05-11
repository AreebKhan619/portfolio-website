import { TypeHeroSectionFields } from "../contentful";
import sampleHeroData from "./sampleHeroResponse.json";

type THeroSection = typeof sampleHeroData;

export interface IHeroSectionDetails {
  heroSectionCollection: {
    items: [THeroSection];
  };
}
