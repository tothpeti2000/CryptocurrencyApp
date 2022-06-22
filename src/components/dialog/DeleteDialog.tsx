import { useUserContext } from "../../context/UserContext";
import { DeleteDialogProps } from "../../interfaces/props";
import DialogFrame from "./DialogFrame";

const DeleteDialog = (props: DeleteDialogProps) => {
  const { deleteCurrency } = useUserContext();

  const handleSubmit = () => {
    deleteCurrency(props.assetID);
  };

  return (
    <DialogFrame
      title="Delete Currency"
      contentText="Are you sure you want to remove this tab?"
      onSubmit={handleSubmit}
    />
  );
};

export default DeleteDialog;
