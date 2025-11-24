import React from 'react';
import { CardContainer } from './styles';
import { isJsonString } from '../../utils';
import { MdOutlineModeEdit, MdOutlineKeyboardArrowDown} from "react-icons/md";
import coin from '../../assets/coin.png';
import clock from '../../assets/clock.png';

interface ICardProps {
  id: string;
  number: number;
  title: string;
  content: string;
  onDeleteCard: any;
  onChangeContent: any;
}

const defaultContent = {
  type: 'record',
  text: '',
  color: 'red',
  fixed: false,
}

const Card: React.FC<ICardProps> = ({
  id,
  number,
  title,
  content,
  onDeleteCard,
  onChangeContent
}: ICardProps) => {
  const textRef = React.useRef<HTMLSpanElement>(null);

  const objContent = isJsonString(content)?JSON.parse(content):{...defaultContent, text: content};
  return (
    <CardContainer key={id} color={objContent.color}>
      <div className="ContentContainer">
        <header>
          <strong>
          <input className="checkbox" type={'checkbox'} checked={objContent.fixed} onChange={e => onChangeContent(id, JSON.stringify({...objContent, fixed: e.target.checked}))} />
          {title}
          </strong>
          <div className='reward-box'>
          <img src={clock} alt="" /> Daily
          <img src={coin} alt="" /> 25
          <span>EXP</span> 500/1250
          </div>
          <div className="button-space">
            <MdOutlineModeEdit onClick={e => onDeleteCard(id)}></MdOutlineModeEdit>
            <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
          </div>
        </header>
        <div className="content">
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
        </div>
      </div>

    </CardContainer>
  );
};

export default Card;
