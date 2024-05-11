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
          statMainAndSubtitle
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
                  sys{
                    id
                  }
              }
          }
      }
  }
}

`;
