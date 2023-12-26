import { Dispatch, SetStateAction } from "react";
export type FunctionDispatch<T> = Dispatch<SetStateAction<T>>;

export interface IglobalVariabels{
    isAuth?: boolean;  
    setIsAuth: FunctionDispatch<boolean>;
  }


export interface IModalSignInProps {
    modal: boolean;
    setModalSignIn: FunctionDispatch<boolean>;
    setModalSignUp: FunctionDispatch<boolean>;
    setIsActive:FunctionDispatch<boolean>;
}
  
export interface ISignIn{
    email:string;
    password:string;
  }

export interface ISignUp{
  email:string;
  password:string;
  secondPassword:string;
}

export interface LoginFormProps {
    onSwitch: () => void;
  }

export interface RegisterFormProps {
  onSwitch: () => void;
}

export interface ITreeNode {
  key: string;
  name: string;
  children?: ITreeNode[];
}

export interface TreeViewProps {
  rootChildren: ITreeNode[]; 
}