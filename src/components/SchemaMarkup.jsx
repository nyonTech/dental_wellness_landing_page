/**
 * Reusable JSON-LD structured data component.
 * Renders a <script type="application/ld+json"> tag for SEO schema markup.
 */
export default function SchemaMarkup({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
