import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeExperienceFields {
    duration?: EntryFieldTypes.Symbol;
    role?: EntryFieldTypes.Symbol;
    company?: EntryFieldTypes.Symbol;
    companyURL?: EntryFieldTypes.Symbol;
    companyLogo?: EntryFieldTypes.AssetLink;
    bgColor?: EntryFieldTypes.Symbol;
    rolesAndResponsibilities?: EntryFieldTypes.RichText;
}

export type TypeExperienceSkeleton = EntrySkeletonType<TypeExperienceFields, "experience">;
export type TypeExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeExperienceSkeleton, Modifiers, Locales>;
