export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Main Heading",
      type: "string",
    },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "clutchRating",
      title: "Clutch Rating",
      type: "object",
      fields: [
        {
          name: "rating",
          title: "Rating",
          type: "number",
        },
        {
          name: "reviewCount",
          title: "Review Count",
          type: "number",
        },
      ],
    },
    {
      name: "sections",
      title: "Footer Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Section Title",
              type: "string",
            },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Link Title",
                      type: "string",
                    },
                    {
                      name: "url",
                      title: "URL",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "offices",
      title: "Offices",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "country",
              title: "Country",
              type: "string",
            },
            {
              name: "address",
              title: "Address",
              type: "text",
            },
            {
              name: "phone",
              title: "Phone",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "partnerships",
      title: "Partnerships & Awards",
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
              name: "logo",
              title: "Logo",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "copyright",
      title: "Copyright Text",
      type: "string",
    },
  ],
}
