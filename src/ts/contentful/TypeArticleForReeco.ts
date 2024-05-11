import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeArticleForReecoFields {
    author?: EntryFields.Symbol;
    content?: EntryFields.Text;
    articleImage?: Asset;
    sampleContent?: EntryFields.RichText;
}

export type TypeArticleForReeco = Entry<TypeArticleForReecoFields>;
