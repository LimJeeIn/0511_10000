import React, { useState } from 'react';
import './Main.css';

// export default function Main({modalOpen})과 같다
export default function Main(props) {
  const [expert, setExpert] = useState('');
  const [traning, setTraning] = useState(0);
  const [dday, setDday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setDday(Math.ceil(10000 / traning)); // 결과값이 setDday안으로 들어간다
  };
  return (
    <main>
      <h2 className='a11y'>필요한 시간 알아보기</h2>
      <form className='cont-input' onSubmit={handleSubmit}>
        <p className='txt-wannabe'>
          나는
          {/* setExpert가 실행될때 event가 전달된다 event.target.value로 값이 업데이트가 된다*/}
          <input
            type='text'
            required
            value={expert}
            onChange={(event) => setExpert(event.target.value)}
          />
          전문가가 될 것이다.
        </p>
        <p className='txt-time'>
          그래서 앞으포 매일 하루에
          <input
            type='number'
            required
            value={traning}
            onChange={(event) => setTraning(event.target.value)}
          />
          시간씩 훈련 할 것이다.
        </p>
        <button type='submit' className='btn-exc'>
          나는 며칠동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>

      {/* dday가 0이 아니라면 <section ~ 이 실행된다 */}
      {!!dday && (
        <section className='cont-result'>
          <h3 className='a11y'>결과확인</h3>
          <p className='txt-wannabe'>
            당신은 <strong>{expert}</strong>가 되기 위해서
            <br />
            대략 <strong>{dday}</strong> 이상 훈련 하셔야 합니다! :&#41;
          </p>
          {/* onClick이되면 App.js의 modalOpen 함수가 실행된다 */}
          <button type='button' className='btn-go' onClick={props.modalOpen}>
            훈련 하러가기 GO!GO!
          </button>
          <button type='button' className='btn-share'>
            공유하기
          </button>
        </section>
      )}
    </main>
  );
}
