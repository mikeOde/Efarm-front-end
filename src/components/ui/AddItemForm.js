import { IconButton } from "@mui/material";
import classes from "./AddItemForm.module.css";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

function AddItemForm(props) {
  return (
    <div className={classes.formContainer}>
    <form className={classes.form}>
      <div className={classes.formTitle}>
        <h4>{props.itemData.title}</h4>
      </div>
      <div className={classes.closeAction}>
        <IconButton 
        onClick={props.closeAction}
        aria-label="close"
        sx={{position: "absolute", top: "1rem", right:"1rem", padding: "0px"}}
        color="error"
        size="small">
          <CancelRoundedIcon fontSize="small" sx={{width: "30px", height: "30px"}}/>
        </IconButton>
      </div>

      <div className={classes.control}>
        <label htmlFor="name">{props.itemData.nameLabel}</label>
        {/* htmlFor is the equival ent of for in regular html and it points to the id */}
        {/* of the input target */}
        <input
          placeholder={props.itemData.namePlaceHolder}
          type="text"
          required
          id="name"
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="quantity">{props.itemData.quantityLabel}</label>
        <input
          placeholder={props.itemData.quantityPlaceHolder}
          type="quantity"
          required
          id="quantity"
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="price">{props.itemData.priceLabel}</label>
        <input
          placeholder={props.itemData.pricePlaceHolder}
          type="number"
          required
          id="price"
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="picture">{props.itemData.pictureLabel}</label>
        <input type="file" required id="picture" />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">{props.itemData.descriptionLabel}</label>
        <textarea
          placeholder={props.itemData.descriptionPlaceHolder}
          id="description"
          required
          rows="5"
        />
      </div>
      <div className={classes.actions}>
        <button>{props.itemData.buttonLabel}</button>
      </div>
    </form>
    </div>
  );
}
export default AddItemForm;
