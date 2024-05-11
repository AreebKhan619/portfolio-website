import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductReviewFields {
    heading: EntryFieldTypes.Symbol;
}

export type TypeProductReviewSkeleton = EntrySkeletonType<TypeProductReviewFields, "productReview">;
export type TypeProductReview<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductReviewSkeleton, Modifiers, Locales>;
