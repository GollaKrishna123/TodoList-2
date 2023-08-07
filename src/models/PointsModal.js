import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function PointsModal({ isOpen, scoredPoints, todos, setTodos, totalPoints }) {

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (totalPoints !== 0) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    unCheckingTodos();
    // scoredPoints=0;
  };

  const unCheckingTodos = () => {
    const updatedTodos = todos.map((todo) =>
      todo.checked ? { ...todo, checked: false } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Congratulations
            <span
              style={{
                float: "right",
                fontSize: "17px",
                paddingRight: "9px",
                paddingTop: "5px",
                cursor: "pointer",
              }}
              onClick={handleClose}
            >
              X
            </span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You have cleared all the Tasks
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default PointsModal;
