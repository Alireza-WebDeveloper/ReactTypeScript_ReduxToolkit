//// Note 1
رو با تعریف RootState , AppDispatch می توانیم همون Store برای قسمت
useSelector,UseDispatch
انتخاب کنیم
یا اینکه راه ساده تر از

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

استفاده کنیم
////
