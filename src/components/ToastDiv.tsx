

interface ToastDivProps {
    id: string;
    p_id: string;
    message: string;
}

const ToastDiv = ({id, p_id, message}: ToastDivProps) => {
   return (
    <>
    <div
        id={id}
        className="-translate-x-full content-center items-center bg-red-800 py-2 px-2 text-center text-white transition-transform duration-300 ease-in-out"
        role="alert"
      >
        <p id={p_id} className="text-center">
          {message}
        </p>
      </div>
    </>
   ) 
};

export default ToastDiv;