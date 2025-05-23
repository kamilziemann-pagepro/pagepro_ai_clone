export default {
  name: "team",
  title: "Team Section",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Main Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "position",
              title: "Position",
              type: "string",
            },
            {
              name: "photo",
              title: "Photo",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "bio",
              title: "Bio",
              type: "text",
            },
            {
              name: "socialLinks",
              title: "Social Links",
              type: "object",
              fields: [
                {
                  name: "linkedin",
                  title: "LinkedIn URL",
                  type: "string",
                },
                {
                  name: "twitter",
                  title: "Twitter URL",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
