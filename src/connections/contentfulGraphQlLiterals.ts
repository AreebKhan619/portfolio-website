export const HERO_SECTION_DETAILS = `
query GetHeroSectionData {
    heroSectionCollection(limit: 1) {
        total
        skip
        limit
        items {
            prefix
            name
            suffix
            highlightedSkills
            heroImg {
                title
                description
                contentType
                fileName
                size
                url
                width
                height
            }
            mainStatsListCollection {
                items {
                    statMainText
                    subtitleText
                    sys {
                        id
                    }
                }
            }
            heroImgSurroundingSkillsCollection {
                items {
                    name
                    url
                    sys {
                        id
                    }
                    icon {
                        title
                        description
                        contentType
                        fileName
                        size
                        url
                        width
                        height
                    }
                }
            }
        }
    }
}

`;

export const CONNECT_WITH_ME = `
query ConnectCollection {
    connectCollection(limit: 1) {
        items {
            socialsCollection {
                total
                items {
                    label
                    url
                    icon {
                        title
                        description
                        contentType
                        fileName
                        size
                        url
                        width
                        height
                    }
                    sys {
                        id
                    }
                }
            }
        }
    }
}

`;
