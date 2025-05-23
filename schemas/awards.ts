export default {
  name: "awards",
  title: "Awards Section",
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
      name: "awards",
      title: "Awards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Award Name",
              type: "string",
            },
            {
              name: "logo",
              title: "Award Logo",
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
            {
              name: "year",
              title: "Year",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
}
