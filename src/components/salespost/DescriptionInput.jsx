import React from 'react';
import { InputBox } from 'pages/Salespost';
import { Editor } from '@tinymce/tinymce-react';

const Description = ({ API_KEY, editorRef }) => {
	return (
		<InputBox>
			<label>상세 설명</label>
			<Editor
				apiKey={API_KEY}
				// ref={editorRef}
				onInit={(evt, editor) => (editorRef.current = editor)}
				initialValue=""
				init={{
					height: 500,
					menubar: false,
					plugins: [
						'advlist',
						'autolink',
						'lists',
						'link',
						'image',
						'charmap',
						'preview',
						'anchor',
						'searchreplace',
						'visualblocks',
						'code',
						'fullscreen',
						'insertdatetime',
						'media',
						'table',
						'code',
						'help',
						'wordcount',
					],
					toolbar:
						'undo redo | blocks | ' +
						'bold italic forecolor | alignleft aligncenter ' +
						'alignright alignjustify | bullist numlist outdent indent | ' +
						'removeformat | help',
					content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
				}}
			/>
		</InputBox>
	);
};

export default Description;
