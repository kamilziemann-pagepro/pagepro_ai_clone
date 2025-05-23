export default {
  name: "caseStudies",
  title: "Case Studies Section",
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
      name: "caseStudies",
      title: "Case Studies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "tags",
              title: "Tags",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "link",
              title: "Link",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "string",
        },
        {
          name: "link",
          title: "Link",
          type: "string",
        },
      ],
    },
  ],
}
