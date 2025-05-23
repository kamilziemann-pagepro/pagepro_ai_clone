export default {
  name: "process",
  title: "Process Section",
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
      name: "steps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "number",
              title: "Step Number",
              type: "number",
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
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
