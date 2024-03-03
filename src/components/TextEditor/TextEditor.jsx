import { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
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
  'background',
];

const TextEditor = () => {
  const [quillValue, setQuillValue] = useState('');

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
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
            { background: [] },
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
    />
  );
};

export default TextEditor;
