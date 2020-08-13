import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      position: relative;
      padding: 16px 0;
      width: 50%;
      text-align: center;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        height: 3px;
        width: 100%;
        background: #333;
      }
    }
  }
`;

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void
}


const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('+' | '-')[]>(['-', '+']);
  const category = props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={category === c ? 'selected' : ''}
              onClick={() => props.onChange(c)}>
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};