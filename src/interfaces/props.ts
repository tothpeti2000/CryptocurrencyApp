import { HTMLInputTypeAttribute } from "react";
import { Control, Path } from "react-hook-form";
import { Asset, WsData } from "./currency";
import { User, UserCredentials } from "./user";

export interface UserDisplayProps {
  user: User;
}

export interface InputFieldProps {
  name: Path<UserCredentials>;
  label: string;
  type: HTMLInputTypeAttribute;
  control: Control<UserCredentials>;
}

export interface CurrencyListItemProps {
  currency: Asset;
  wsData?: WsData;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  currency: Asset;
}

export interface AmountInputProps {
  currencyName: string;
  amount: string;
  onChange: (amount: string) => void;
}

export interface DialogFrameProps {
  title: string;
  contentText: string;
  onSubmit: Function;
}

export interface DeleteDialogProps {
  assetID: string;
}

export interface ChartProps {
  assetID: string;
}
