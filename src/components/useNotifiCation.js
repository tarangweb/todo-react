import  {useEffect} from "react";

const useNotifiCation = (Notifi,Tododata)=> {
    useEffect(()=>{
        document.title=`${Notifi} (${Tododata.length})`;
       // console.log('usehok')
     });
}
export default useNotifiCation;
