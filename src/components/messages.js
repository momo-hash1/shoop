import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Alert, Snackbar } from "@mui/material";
import { remove } from "../logic/redux/messageSlice";

const Messages = () => {
  const messages = useSelector((state) => state.alert.messages);
  const dispatch = useDispatch();
  return (
    <div>
      {messages.map((x) => {
        return (
          <Snackbar key={x.id}
            open={true}
            onClose={() => dispatch(remove(x.id))}
            autoHideDuration={5000}
          >
            <Alert severity="info">{x.title}</Alert>
          </Snackbar>
        );
      })}
    </div>
  );
};

export default Messages;
