import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)({
    boxShadow: "none",
    textTransform: 'none',
    borderRadius: 0,
    fontSize: 18,
    fontWeight: 300,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    color: "black",
    backgroundColor: 'white',
    borderColor: "#3C3C3C",
    width: 150,
    height: 50,
    '&:hover': {
        backgroundColor: "#F0F1F1",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    },

});

export default CustomButton;

