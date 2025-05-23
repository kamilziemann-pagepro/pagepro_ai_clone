export default {
  name: "benefits",
  title: "Benefits Section",
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
      name: "items",
      title: "Benefit Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
            },
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
          ],
        },
      ],
    },
  ],
}
