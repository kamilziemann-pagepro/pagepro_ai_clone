export default {
  name: "techStack",
  title: "Tech Stack Section",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Main Heading",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Technology Name",
              type: "string",
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
