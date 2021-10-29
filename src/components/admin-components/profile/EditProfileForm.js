import { IconButton } from "@mui/material";
import classes from "./EditProfileForm.module.css";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

function EditProfileForm(props) {
  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <div className={classes.formTitle}>
          <h4>EDIT PROFILE</h4>
        </div>
        <div className={classes.closeAction}>
          <IconButton
            onClick={props.action}
            aria-label="close"
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              padding: "0px",
            }}
            color="error"
            size="small"
          >
            <CancelRoundedIcon
              fontSize="small"
              sx={{ width: "30px", height: "30px" }}
            />
          </IconButton>
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Farm Name</label>
          {/* htmlFor is the equival ent of for in regular html and it points to the id */}
          {/* of the input target */}
          <input type="text" required id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="picture">Farm Picture</label>
          <input type="file" required id="picture" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" />
        </div>
        <div className={classes.actions}>
          <button>EDIT PROFILE</button>
        </div>
      </form>
    </div>
  );
}
export default EditProfileForm;
