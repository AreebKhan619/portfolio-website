import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLibraryOrToolSkeleton } from "./TypeLibraryOrTool";

export interface TypeToolsOrLibrariesUsedFields {
    createdFor?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    librariesList?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLibraryOrToolSkeleton>>;
}

export type TypeToolsOrLibrariesUsedSkeleton = EntrySkeletonType<TypeToolsOrLibrariesUsedFields, "toolsOrLibrariesUsed">;
export type TypeToolsOrLibrariesUsed<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeToolsOrLibrariesUsedSkeleton, Modifiers, Locales>;
