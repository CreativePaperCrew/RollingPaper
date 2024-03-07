import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import * as S from './InnerHtmlStyle';
import DOMPurify from 'dompurify';

const InnerHtml = ({ content, font }) => {
  const cfg = {
    inlineStyles: true,
  };

  const jsonData = JSON.parse(content).ops;

  const converter = new QuillDeltaToHtmlConverter(jsonData, cfg);

  const html = converter.convert();

  return (
    <S.HtmlContent
      $font={font}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  );
};

export default InnerHtml;
