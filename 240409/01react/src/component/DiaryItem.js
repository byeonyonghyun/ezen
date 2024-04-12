import React from 'react';
import "./DiaryItem.css";
import Button from './Button';
import { getEmotionImgById } from "../util";
import { useNavigate } from "react-router-dom"

const DiaryItem = ({id, date, emotionId, content}) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  }

  return (
    <div className='DiaryItem'>
      <div onClick={goDetail} className={["img_section", `img_section_${emotionId}`].join(" ")}>
        <img src={getEmotionImgById(emotionId)}/>
      </div>
      <div className='info_section' onClick={goDetail}>
        <div className='date_wrapper'>
          {new Date(date).toLocaleDateString()}
        </div>
        <div className='content_wrapper'>
          {content.slice(0, 25)}
        </div>
        <div className='button_section'>
          <Button text="수정하기" onClick={goEdit}/>
        </div>
      </div>
    </div>
  )
}

export default DiaryItem ;