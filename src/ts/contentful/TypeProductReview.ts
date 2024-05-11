import type { Entry, EntryFields } from "contentful";

export interface TypeProductReviewFields {
    heading: EntryFields.Symbol;
}

export type TypeProductReview = Entry<TypeProductReviewFields>;
