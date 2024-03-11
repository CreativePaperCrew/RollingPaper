import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import * as S from './InnerHtmlStyle';
import DOMPurify from 'dompurify';

const InnerHtml = ({ content, font, isCard }) => {
  const jsonData = JSON.parse(content).ops;

  const cfg = {
    inlineStyles: true,
  };

  const converter = new QuillDeltaToHtmlConverter(jsonData, cfg);

  const html = converter.convert();

  return (
    <S.HtmlContent
      $font={font}
      $isCard={isCard}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  );
};

export default InnerHtml;
