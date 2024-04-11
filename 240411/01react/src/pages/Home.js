import React from "react";
import Editor from "../component/Editor";
import { emotionList } from "../util";

const Home = () => {
  return (
    <div>
      <Editor initData={{
        date: new Date().getTime(),
        emotionId: 1,
        content: "이전에 작성한 일기"
      }}
      onSubmit={() => {
      }}/>
    </div>
  );
};

export default Home;
