import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeExperienceFields {
    duration?: EntryFields.Symbol;
    role?: EntryFields.Symbol;
    company?: EntryFields.Symbol;
    companyURL?: EntryFields.Symbol;
    companyLogo?: Asset;
    bgColor?: EntryFields.Symbol;
    rolesAndResponsibilities?: EntryFields.RichText;
}

export type TypeExperience = Entry<TypeExperienceFields>;
