import type { Entry, EntryFields } from "contentful";

export interface TypeMainStatDetailsFields {
    statMainText?: EntryFields.Symbol;
    subtitleText?: EntryFields.Symbol;
}

export type TypeMainStatDetails = Entry<TypeMainStatDetailsFields>;
