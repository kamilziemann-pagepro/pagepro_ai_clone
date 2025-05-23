export default {
  name: "hero",
  title: "Hero Section",
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
      type: "object",
      fields: [
        {
          name: "beforeHighlight",
          title: "Text Before Highlight",
          type: "string",
        },
        {
          name: "highlight",
          title: "Highlighted Text",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
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
