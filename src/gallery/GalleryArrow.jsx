import { AiFillCaretLeft , AiFillCaretRight } from "react-icons/ai";



const GalleryArrow = ({prev , next}) => {
    return (
        <p className="arrow">
           <i onClick={()=>prev()} ><AiFillCaretLeft/></i>
           
           <i onClick={()=>next()} ><AiFillCaretRight/></i>
          
        </p>
    );
};

export default GalleryArrow;