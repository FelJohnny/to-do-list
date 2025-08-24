import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store";

//usado para alterar o estado das slices
export const useAppDispatch = () => useDispatch<AppDispatch>();

//usado para recuperar o estado das slices
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
