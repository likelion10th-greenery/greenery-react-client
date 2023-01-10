import { FlexBox } from 'components/common';
import Inform from 'components/Share/Inform';
import ShareList from 'components/Share/ShareList';

const Share = () => {
	return (
		<FlexBox column width="80%" minWidth="560px" margin="0 0 3rem 0">
			<Inform />
			<ShareList />
		</FlexBox>
	);
};

export default Share;
