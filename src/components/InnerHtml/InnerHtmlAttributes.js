const InnerHtmlAttributes = (attributes) => {
  let styleString = '';
  if (attributes.bold) {
    styleString += 'font-weight: bold;';
  }
  if (attributes.italic) {
    styleString += 'font-style: italic;';
  }
  if (attributes.underline) {
    styleString += 'text-decoration: underline;';
  }
  return styleString;
};

export default InnerHtmlAttributes;
