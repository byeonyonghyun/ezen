import "./Editor.css"
import Button from "./Button"
import EmotionItem from "./EmotionItem"
import { useNavigate} from "react-router-dom";
import { getFormattedData, emotionList } from "../util"
import { useState, useEffect } from "react"

const Editor = ({initData, onSubmit}) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedData(new Date()),
    emotionId:3,
    content: "",
  });
  useEffect(() => {
    if(initData) {
      setState({
        ...initData,
        date: getFormattedData(new Date(initData.date)),
      });
    }
  },[initData]);
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    })
  }
  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    })
  }
  const handleSubmit = () => {
    onSubmit(state);
  }
  const handleOnGoBack = () => {
    navigator(-1);
  }

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">{emotionList.map((it)=>(
          <EmotionItem key={it.id} {...it} onClick={handleChangeEmotion} isSelected={state.emotionId === it.id}/>
        ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea placeholder="오늘은 기분이 좋아요" value={state.content} onChange={handleChangeDate}/>
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text="취소하기" onClick={handleOnGoBack}/>
        <Button text="작성완료" type="positive" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default Editor