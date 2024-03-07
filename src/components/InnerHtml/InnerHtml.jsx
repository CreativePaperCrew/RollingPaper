import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import * as S from './InnerHtmlStyle';
import InnerHtmlAttributes from './InnerHtmlAttributes';

const InnerHtml = ({ content, font }) => {
  const cfg = {
    inlineStyles: true,
  };

  const jsonData = JSON.parse(content).ops;

  const converter = new QuillDeltaToHtmlConverter(jsonData, cfg);

  converter.beforeRender(function (groupType, data) {
    let html = '';
    if (groupType === 'inline-group') {
      data.ops.forEach((op) => {
        let attributesHtml = '';
        if (op.attributes) {
          for (const key in op.attributes) {
            attributesHtml += `${key}="${op.attributes[key]}"`;
          }
          html += `<p ${attributesHtml} style="${InnerHtmlAttributes(op.attributes)}">${op.insert.value}</p>`;
        }
      });
    }
    return html;
  });

  const html = converter.convert();

  return (
    <S.HtmlContent $font={font} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default InnerHtml;
