import React from "react";
import * as S from "./styles";

function Stream({ stream }) {
  console.log("stream ", stream);
  return (
    <S.streamWrapper>
      <S.streamImage
        src={stream.picture}
        alt={stream.name + " playing " + stream.game}
      />
      <S.infosContainer>
        <S.streamTitle>{stream.name}</S.streamTitle>
      </S.infosContainer>
    </S.streamWrapper>
  );
}

export default Stream;
