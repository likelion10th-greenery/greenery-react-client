import { FlexBox } from 'components/common';
import Inform from 'components/Share/Inform';
import ShareList from 'components/Share/shareList/ShareList';

const Share = () => {
	return (
		<FlexBox column width="80%" margin="0 0 3rem 0">
			<Inform />
			<ShareList />
		</FlexBox>
	);
};

export default Share;
