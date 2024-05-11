import type { Entry, EntryFields } from "contentful";
import type { TypeLibraryOrToolFields } from "./TypeLibraryOrTool";

export interface TypeToolsOrLibrariesUsedFields {
    createdFor?: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    librariesList?: Entry<TypeLibraryOrToolFields>[];
}

export type TypeToolsOrLibrariesUsed = Entry<TypeToolsOrLibrariesUsedFields>;
