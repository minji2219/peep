import styled from '@emotion/styled';
import Friend from './Friend';
import {AiOutlineUndo} from 'react-icons/ai';
import {COMMON} from '@styles/common';
import ReactModal from 'react-modal';
import {pickConfirm} from '@styles/modal';
import {useState} from 'react';
import Modal from './Modal';
import {Button} from '@components/common/Button';

interface Props {
  question: string;
}
const friends = [
  {name: '서민지', profile: 'https://dthezntil550i.cloudfront.net/ps/latest/ps2201272314365330022817814/1280_960/56cf6ec5-7084-48e1-a543-79b1d5908eab.png'},
  {name: '신지훈', profile: 'https://dthezntil550i.cloudfront.net/ps/latest/ps2201272314365330022817814/1280_960/56cf6ec5-7084-48e1-a543-79b1d5908eab.png'},
  {name: '박인서', profile: 'https://dthezntil550i.cloudfront.net/ps/latest/ps2201272314365330022817814/1280_960/56cf6ec5-7084-48e1-a543-79b1d5908eab.png'},
  {
    name: '유수민',
    profile: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20150816_146%2Fanimalnav_1439729019064A9Dqm_JPEG%2FScreenshot_2015-07-12-12-24-13_edit_edit.jpg&type=sc960_832',
  },
];

const Friends = ({question}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [picked, setPicked] = useState({
    name: '',
    profile: '',
  });

  const clickHandle = () => {
    if (picked.name === '') {
      alert('해당하는 사람을 Pick 해주세요.');
      return;
    }
    setIsOpen(true);
  };
  return (
    <Wrapper>
      <Cotainer>
        {friends.map((friend) => (
          //TODO: KEY값 추가하기
          <Friend name={friend.name} profile={friend.profile} setPicked={setPicked} />
        ))}
      </Cotainer>
      <Arrow>
        <LeftArrow>
          <AiOutlineUndo size="30" />
        </LeftArrow>
        <RightArrow>
          <AiOutlineUndo size="30" />
        </RightArrow>
        <Count>2</Count>
      </Arrow>

      <Button onClick={clickHandle} bgColor={COMMON.color.darkGray} border="gold" style={{width: '200px', margin: '0 auto', fontWeight: 'bold'}}>
        Pick !
      </Button>
      <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={pickConfirm}>
        <Modal question={question} picked={picked} onRequestClose={() => setIsOpen(false)} />
      </ReactModal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// TODO: 반응형으로 만들기
const Cotainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  padding-left: 40px;
`;

const LeftArrow = styled(Arrow)`
  cursor: pointer;
  transform: rotate(45deg);
  padding: 0;
`;

const RightArrow = styled(Arrow)`
  cursor: pointer;
  transform: scaleX(-1) rotate(45deg);
  padding: 0;
`;

const Count = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export default Friends;
