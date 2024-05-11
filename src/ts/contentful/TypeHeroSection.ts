import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeMainStatDetailsSkeleton } from "./TypeMainStatDetails";

export interface TypeHeroSectionFields {
    prefix?: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Object;
    suffix?: EntryFieldTypes.Text;
    statMainAndSubtitle?: EntryFieldTypes.Object;
    mainStatsList: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMainStatDetailsSkeleton>>;
    heroImg: EntryFieldTypes.AssetLink;
    highlightedSkills?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeHeroSectionSkeleton = EntrySkeletonType<TypeHeroSectionFields, "heroSection">;
export type TypeHeroSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroSectionSkeleton, Modifiers, Locales>;
