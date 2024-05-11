import type { Entry, EntryFields } from "contentful";

export interface TypePostFields {
    something: EntryFields.Symbol;
}

export type TypePost = Entry<TypePostFields>;
