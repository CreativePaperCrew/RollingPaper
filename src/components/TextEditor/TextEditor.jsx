import { useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import * as S from './TextEditorStyle';

const formats = [
  'bold',
  'italic',
  'underline',
  'list',
  'bullet',
  'align',
  'color',
];

const TextEditor = ({ handleContentOnchange, contents }) => {
  const [quillValue, setQuillValue] = useState({});
  const [isBlank, setIsBlank] = useState(false);

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
    setIsBlank(contents.length < 1);
    handleContentOnchange(editor.getText());
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline'],
          [{ align: '' }, { align: 'center' }, { align: 'right' }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [
            {
              color: [],
            },
          ],
        ],
      },
    };
  }, []);

  return (
    <S.TextEditor
      theme="snow"
      modules={modules}
      formats={formats}
      value={quillValue || ''}
      placeholder="메세지를 입력해주세요"
      onChange={handleQuillChange}
      onBlur={() => setIsBlank(contents.length <= 1)}
      $isError={isBlank}
    />
  );
};

export default TextEditor;
