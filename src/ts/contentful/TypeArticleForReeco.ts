import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeArticleForReecoFields {
    author?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Text;
    articleImage?: EntryFieldTypes.AssetLink;
    sampleContent?: EntryFieldTypes.RichText;
}

export type TypeArticleForReecoSkeleton = EntrySkeletonType<TypeArticleForReecoFields, "articleForReeco">;
export type TypeArticleForReeco<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeArticleForReecoSkeleton, Modifiers, Locales>;
