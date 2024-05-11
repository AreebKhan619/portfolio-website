import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeMainStatDetailsFields } from "./TypeMainStatDetails";

export interface TypeHeroSectionFields {
    prefix?: EntryFields.Symbol;
    name: EntryFields.Object;
    suffix?: EntryFields.Text;
    statMainAndSubtitle?: EntryFields.Object;
    mainStatsList: Entry<TypeMainStatDetailsFields>[];
    heroImg: Asset;
    highlightedSkills?: EntryFields.Symbol[];
}

export type TypeHeroSection = Entry<TypeHeroSectionFields>;
