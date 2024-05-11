import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLibraryOrToolFields {
    name?: EntryFieldTypes.Symbol;
    url?: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.AssetLink;
}

export type TypeLibraryOrToolSkeleton = EntrySkeletonType<TypeLibraryOrToolFields, "libraryOrTool">;
export type TypeLibraryOrTool<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLibraryOrToolSkeleton, Modifiers, Locales>;
