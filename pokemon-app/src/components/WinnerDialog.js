import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material/";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const S = {
  StyledButton: styled(Button)`
    margin-right: 4%;
  `,
  StyledTypo: styled(Typography)`
    display: flex;
    justify-content: center;
  `,
  StyledButtonsWrapper: styled(DialogActions)`
    margin: 0 60px;
    justify-content: center;
    & > button {
      padding: 0 50px;
    }
  `,
};

const WinnerDialog = ({ open, whoWon, setWinnerDialog, arena, setArena }) => {
  let nav = useNavigate();

  return (
    <div>
      <Dialog open={open}>
        <S.StyledTypo component={"div"} fontSize={55}>
          {whoWon ? `${arena[0]?.name} WON!` : `${arena[1]?.name} WON!`}
        </S.StyledTypo>
        <S.StyledButtonsWrapper>
          <Button
            onClick={() => {
              setArena([]);
              nav("/");
            }}
          >
            Back to home page
          </Button>
          <Button
            onClick={() => {
              setWinnerDialog(false);
              nav("/arena");
            }}
          >
            Back to arena
          </Button>
        </S.StyledButtonsWrapper>
      </Dialog>
    </div>
  );
};

export default WinnerDialog;
