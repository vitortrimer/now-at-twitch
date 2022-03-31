import styled from "styled-components";
import Colors from "../../styles/colors";

export const streamWrapper = styled.div`
  display: flex;

  padding: 4px 8px;

  margin-bottom: 10px;
`;

export const streamImage = styled.img`
  width: 120px;
  height: 75px;

  object-fit: cover;
`;

export const infosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  padding: 0 16px;
`;

export const streamTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${Colors.twitchPurple};
`;
