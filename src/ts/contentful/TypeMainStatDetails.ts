import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMainStatDetailsFields {
    statMainText?: EntryFieldTypes.Symbol;
    subtitleText?: EntryFieldTypes.Symbol;
}

export type TypeMainStatDetailsSkeleton = EntrySkeletonType<TypeMainStatDetailsFields, "mainStatDetails">;
export type TypeMainStatDetails<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMainStatDetailsSkeleton, Modifiers, Locales>;
