import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Badhon Collection`;
    }, [title])
};
export default useTitle;
