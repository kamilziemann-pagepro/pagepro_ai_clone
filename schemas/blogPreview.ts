export default {
  name: "blogPreview",
  title: "Blog Preview Section",
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
      name: "blogPosts",
      title: "Blog Posts",
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
              name: "excerpt",
              title: "Excerpt",
              type: "text",
            },
            {
              name: "slug",
              title: "Slug",
              type: "string",
            },
            {
              name: "publishedAt",
              title: "Published At",
              type: "datetime",
            },
            {
              name: "featuredImage",
              title: "Featured Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "categories",
              title: "Categories",
              type: "array",
              of: [{ type: "string" }],
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
