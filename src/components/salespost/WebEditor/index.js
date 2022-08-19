import { Wrapper } from '../styled';
import { Title } from './styled';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const WebEditor = () => {
	return (
		<Editor
			placeholder="내용을 입력해주세요."
			previewStyle="vertical"
			height="500px"
			initialEditType="wysiwyg"
			toolbarItems={[
				['heading', 'bold', 'italic', 'strike'],
				['hr', 'quote'],
				['ul', 'ol', 'task', 'indent', 'outdent'],
				['table', 'image', 'link'],
				['code', 'codeblock'],
			]}
			useCommandShortcut={false}
		/>
	);
};

export default WebEditor;
