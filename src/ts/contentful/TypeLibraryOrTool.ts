import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeLibraryOrToolFields {
    name?: EntryFields.Symbol;
    url?: EntryFields.Symbol;
    icon?: Asset;
}

export type TypeLibraryOrTool = Entry<TypeLibraryOrToolFields>;
